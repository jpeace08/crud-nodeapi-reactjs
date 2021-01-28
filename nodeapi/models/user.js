const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
    },
    hashedPassword: {
        type: String,
        required: true,
    },
    salt: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: Date,
});

// userSchema.virtual('password')
//     .set(function (password) {
//         //create temporary called _password
//         this._password = password;
//         //generate a timestamp
//         this.salt = v4();
//         //encrypt pasword
//         const res = this.encryptPassword(password) || '';
//         this.hashedPassword = res;
//     })
//     .get(function () {
//         return this._password;
//     })

// userSchema.methods = {
//     encryptPassword: (password) => {
//         if (!password) {
//             return 'AAA';
//         };
//         try {
//             bcrypt.hash(password, 12)
//                 .then(p => p)
//                 .catch(err => 'AA');
//         } catch (error) {
//             return 'A';
//         }
//     }
// }


module.exports = mongoose.model('User', userSchema);