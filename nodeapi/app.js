const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
dotenv.config();

//db:
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log(`DB Connected!`);
    })
    .catch(err => {
        console.log(`Error: ${err.message}`);
    });

//bring in routes:
const postRoutes = require('./routes/post');
const authRoutes = require('./routes/auth');


//middleware:
app.use(cors({}));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/post', postRoutes);
app.use('/user', authRoutes);
app.use('/', (req, res, next) => {
    return res.status(200).json({
        'message': 'Hello world!',
    });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`A Node Js API is listening on port: ${port}`);
});