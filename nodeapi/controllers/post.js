const { postValidator } = require('../helpers');
const Post = require('../models/post');

exports.getPosts = (req, res, next) => {
    Post.find().select('_id title body ')
        .then(posts => res.status(200).json({
            posts,
        }))
        .catch(err => res.status(400).json({
            errors: [err.message],
        }))
}

exports.getPostBy = (req, res, next) => {
    const { _id } = req.params;
    Post.findById(_id)
        .then(post => {
            return res.status(200).json({
                post,
            });
        })
        .catch(error => {
            return res.status(400).json({
                error,
            })
    })
}

exports.deletePostBy = (req, res, next) => {
    const { _id } = req.params;
    Post.deleteOne({
        _id,
    })
        .then(post => {
            return res.status(200).json({
                post,
            });
        })
        .catch(error => {
            return res.status(400).json({
                error,
            })
        })
}

exports.createPost = (req, res, next) => {
    const { post } = req.body;
    const {errors, length} = postValidator(post);
    if (length > 0) {
        return res.status(400).json({
            errors: [...errors]
        });
    }

    Post.create({
        ...post,
    })
        .then(post => res.status(200).json({
            post,
        }))
        .catch(err => res.status(400).json({
            errors: err.message,
        }));
}

exports.updatePost = async (req, res, next) => {
    const { title, body } = req.body;
    const { _id } = req.params;

    const { errors, length } = postValidator({ title, body });

    if (length > 0) {
        return res.status(400).json({
            errors,
        })
    }

    const post = await Post.findById({ _id });
    if (!post) return res.status(400).json({
        error: 'Post is not exit',
    })

    Post.updateOne({ _id }, { title, body }, { new: true })
        .then(post => res.status(200).json({ message: 'Post update successfully!' }))
        .catch(error => res.status(400).json({ error: error.message }));
}