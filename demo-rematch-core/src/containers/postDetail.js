import React, {useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import Post from '../components/post';
import PostUpdate from '../pages/postUpdate';

const PostDetailContainer = ({ showForm, post, error, loading, fetchPostBy, deletePostBy, setShowForm }) => {

    const { _id } = useParams();
    const history = useHistory();
    useEffect(() => {
        fetchPostBy(_id);
    }, [_id, fetchPostBy]);

    const handleDeletePost = async id => {
        await deletePostBy(id);
        history.push('/feeds');
    }

    const handleEditPost = id => {
        setShowForm(true);
    }

    return (
        <>
            {loading ? 'Loading...' : ''}
            {showForm && post._id !== undefined && (
                <PostUpdate />
            )}
            {post && post._id && (
                <Post key={post._id}
                    direction='column'
                    width='90%'>
                    <Post.Entities
                        direction='row'>
                        <Post.Image
                            src='/images/user.svg'
                            width='100px' height='100px'
                        />
                        <Post.Title
                            to={`/post/${post._id}`}>
                            {post.title}
                        </Post.Title>
                    </Post.Entities>
                    <Post.Entities
                        direction='column'>
                        <Post.Text>
                            {post.body}
                        </Post.Text>
                    </Post.Entities>
                    <Post.Entities
                        direction='row'>
                        <Post.LikeButton />
                        <Post.CommentButton />
                        <Post.DeleteButton 
                            onClick={() => handleDeletePost(post._id)}
                        />
                        <Post.EditButton
                            onClick={() => handleEditPost(post._id)}
                        />
                    </Post.Entities>
                </Post>
            )}
        </>
    )
}

const mapState = (state) => {
    return {
        post: state.postModel.post,
        loading: state.postModel.loading,
        error: state.postModel.error,
        showForm: state.postModel.showForm,
    }
}

const mapDispatch = (dispatch) => {
    return {
        fetchPostBy: dispatch.postModel.fetchPostBy,
        deletePostBy: dispatch.postModel.deletePostBy,
        setShowForm: dispatch.postModel.setShowForm,
    }
}

export default connect(mapState, mapDispatch)(PostDetailContainer);

