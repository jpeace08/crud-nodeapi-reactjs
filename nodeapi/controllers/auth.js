const { v4 } = require('uuid');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const {
    generateToken,
    signupValidator,
    signinValidator
} = require('../helpers');

exports.signup = async (req, res) => {
    const { email, name, password } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) return res.status(403).json({
        error: 'Email is taken!', 
    });

    const { errors, length } = signupValidator({ name, email, password });

    if (length > 0) {
        return res.status(400).json({
            errors,
        })
    }

    const user = new User({
        email,
        name,
        salt: v4(),
        hashedPassword: await bcrypt.hash(password, 12),
    });

    user.save()
        .then(user => res.status(200).json({ 
            id: user._id,
            ...user._doc,
            token: generateToken(user),
         }))
        .catch(err => res.status(403).json({error: err.message}));
}

exports.signin = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({
        error: 'User is not exist!',
    });

    const { errors, length } = signinValidator({email, password });

    if (length > 0) {
        return res.status(400).json({
            errors,
        })
    }

    //compare password
    bcrypt.compare(password, user.hashedPassword)
        .then(result => {
            if (result) {
                return res.status(200).json({
                    id: user._id,
                    ...user._doc,
                    token: generateToken(user),
                })
            }
            else {
                return res.status(403).json({
                    error: 'Invalid password!',
                })
            }
        })
        .catch(err => res.status(401).json({
            error: err.message,
        }));
}

exports.getUsers = async (req, res, next) => {
    User.find().select('_id name email')
        .then(users => res.status(200).json({users}))
        .catch(err => res.status(400).json({ error: err }));
}