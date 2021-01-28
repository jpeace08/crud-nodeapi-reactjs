const jwt = require('jsonwebtoken');
require('dotenv').config();

const postValidator = (post) => {
    const { title, body } = post;
    const errors = [
        ...validate('title', title, 'string', 4, 150).errors,
        ...validate('body', body, 'string', 4, 2000).errors
    ];

    return {
        errors,
        length: errors.length,
    }
}

const signupValidator = ({ name, email, password }) => {
    const errors = [
        ...validate('name', name, 'string', 4, 32).errors,
        ...validate('email', email, 'email', 0, 0).errors,
        ...validate('password', password, 'password', 0, 10).errors,
    ]
    return {
        errors,
        length: errors.length,
    }
}

const signinValidator = ({ email, password }) => {
    const errors = [
        ...validate('email', email, 'email', 0, 0).errors,
        ...validate('password', password, 'password', 0, 10).errors,
    ]
    return {
        errors,
        length: errors.length,
    }
}

const validate = (name, nd, type = 'string',min = 1, max = 1) => {
    const content = nd.trim();
    const errors = [];
    
    switch (type) {
        case 'string':
            if (content === undefined || content === null || content.length === 0) {
                errors.push(`${name} must be not empty`);
            }

            else if (content.length < min || content.length > max) {
                errors.push(`${name} must be between ${min} and ${max} charactors`);
            }
            break;
        case 'email':
            const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!regEmail.test(String(nd.toLowerCase()))) {
                errors.push(`${name} must be a valid email address`);
            }
            break;
        case 'password':
            const regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
            if (!regPassword.test(String(nd))) {
                errors.push(`${name} should contain a minimum of 8 characters with 1 special 1 letter and 1 numeric`);
            }
            break;
        case 'password':

            break;
        default:
            break;
    }

    return {
        errors,
        length: errors.length,
    }
}

const generateToken = ({ id, name, email }) => jwt.sign({
    id, name, email
}, process.env.SECRET_KEY || 'Very easy', { expiresIn: '1h' });

module.exports = {
    postValidator,
    generateToken,
    signupValidator,
    signinValidator,
}





