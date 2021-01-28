import client from '../client';

const url = '/post';

const postModel = {
    state: {
        showForm: false,
        posts: [],
        post: {},
        error: { message: null},
        loading: false,
        success: {message: null},
    },
    reducers: {
        setShowForm: (state, payload) => {
            return {
                ...state,
                showForm: payload,
            }
        },
        setLoading: (state, payload) => {
            return {
                ...state,
                loading: payload,
            }
        },
        setPosts: (state, payload) => {
            return {
                ...state,
                posts: payload.posts,
            }
        },
        setError: (state, payload) => {
            return {
                ...state, 
                error: {
                    message: payload
                }
            }
        },
        setPost: (state, payload) => {
            return {
                ...state,
                post: payload,
            }
        },
        updatePosts: (state, payload) => {
            const { posts } = state;
            const { id, isEdit } = payload;
            if (!isEdit) {
                return {
                    ...state,
                    posts: posts.filter(post => post._id !== id),
                }
            }
            else {
                const { post: { title, body } } = payload;
                return {
                    ...state, 
                    posts: posts.reduce((posts, cVal, cIndex) => {
                        if (cVal._id === id) {
                            posts.push({
                                _id: cVal._id,
                                title: title,
                                body: body,
                            })
                        }
                        else posts.push(cVal);
                        return posts;
                    }, []),
                }
            }
        },
        updatePost: (state, payload) => {
            return {
                ...state, 
                post: {}
            }
        }
    },
    effects: (dispatch) => ({
        fetchPosts: () => {
            dispatch.postModel.setLoading(true);
            client.get(`${url}`, {})
                .then(({ data: posts }) => { dispatch.postModel.setPosts(posts) })
                .catch(error => { dispatch.postModel.setError(error) })
                .finally(dispatch.postModel.setLoading(false));
        },
        fetchPostBy: (id) => {
            dispatch.postModel.setLoading(true);
            client.get(`${url}/${id}`)
                .then(({ data: {post} }) => { dispatch.postModel.setPost(post);})
                .catch(error => dispatch.postModel.setError(error.message))
                .finally(() => { dispatch.postModel.setLoading(false) });
        },
        deletePostBy: id => {
            dispatch.postModel.setLoading(true);
            client.delete(`${url}/remove/${id}`, {})
                .then((res) => {
                    dispatch.postModel.updatePosts({
                        id, isEdit: false,
                    });
                    dispatch.postModel.updatePost(id);
                })
                .catch(error => { dispatch.postModel.setError(error) })
                .finally(() => { dispatch.postModel.setLoading(false) })
        },
        updatePostBy: ({id, title, body}) => {
            dispatch.postModel.setLoading(true);
            client.put(`${url}/${id}`, { title, body }, {})
                .then(message => { 
                    dispatch.postModel.updatePosts({ id, isEdit: true, post: { title, body } });
                })
                .catch(error => { dispatch.postModel.setError(error) })
                .finally(() => {
                    dispatch.postModel.setLoading(false);
                    dispatch.postModel.fetchPostBy(id);
                    dispatch.postModel.setShowForm(false);
                });
        },
        addPost: ({ title, body }) => {
            dispatch.postModel.setLoading(true);
            client.post(`${url}/add`, { post: { title, body } }, {})
                .then(post => {
                    dispatch.postModel.setPost(post);
                })
                .catch(error => { dispatch.postModel.setError(error) })
                .finally(() => {dispatch.postModel.setLoading(false)});
        }
    })
}

export default postModel;