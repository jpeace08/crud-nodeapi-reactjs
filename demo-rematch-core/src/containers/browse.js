import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import Post from '../components/post';
import PostUpdate from '../pages/postUpdate';

function BrowseContainer({
    post, posts, showForm, loading, error, fetchPosts, deletePostBy, setShowForm, fetchPostBy,
}) {

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    const handleDeletePost = async id => {
        await deletePostBy(id);
    }
    
    const handleEditPost = async id => {
        await fetchPostBy(id);
        setShowForm(true);
    }

    return (
        <>
            {  showForm && post._id !== undefined && (
                <PostUpdate />
            )}
            {loading ? 'Loading...' : ''}
            {posts && posts.length > 0 && (
                <Post.Group direction='row'>
                    {
                        posts.map(post => (
                            <Post
                                direction='column'
                                key={post._id}
                                width='40%'>
                                <Post.Entities direction='row'>
                                    <Post.Image
                                        width='50px'
                                        height='50px'
                                        alt='User vatar'
                                        src='/images/user.svg' />
                                    <Post.Entities
                                        direction='column'>
                                        <Post.Title
                                            to={`/post/${post._id}`}>
                                            {post.title}
                                        </Post.Title>
                                        <Post.Text>2h ago</Post.Text>
                                    </Post.Entities>
                                </Post.Entities>
                                <Post.Entities direction='column'>
                                    <Post.Content>
                                        <Post.Text>
                                            {post.body}
                                        </Post.Text>
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
                                    </Post.Content>
                                </Post.Entities>
                            </Post>
                        ))
                    }
                </Post.Group>
            )}
        </>
    )
}

const mapState = ({ postModel }) => {
    return {
        posts: postModel.posts,
        loading: postModel.loading,
        error: postModel.error,
        showForm: postModel.showForm,
        post: postModel.post,
    }
}

const mapDispatch = (dispatch) => {
    return {
        fetchPosts: dispatch.postModel.fetchPosts,
        deletePostBy: dispatch.postModel.deletePostBy,
        setShowForm: dispatch.postModel.setShowForm,
        fetchPostBy: dispatch.postModel.fetchPostBy,
    }
}


export default connect(mapState, mapDispatch)(BrowseContainer);