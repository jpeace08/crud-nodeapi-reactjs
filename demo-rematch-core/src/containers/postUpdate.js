import React, { useState } from 'react';
import { connect } from 'react-redux';
import Form from '../components/form';

const PostUpdateContainer = ({post, updatePostBy}) => {

    const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.body);

    const handleSubmit = async e => {
        await updatePostBy({ id: post._id, title, body });
    }

    return (
        <>
            {post._id && (
                <Form>
                    <Form.Header>
                        <Form.Title>Update post</Form.Title>
                    </Form.Header>
                    <Form.Body>
                        <Form.Field>
                            <Form.Label>Title</Form.Label>
                            <Form.Input
                                type='text'
                                value={title}
                                onChange={e => { setTitle(e.target.value) }}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Form.Label>Body</Form.Label>
                            <Form.Input
                                type='text'
                                value={body}
                                onChange={e => { setBody(e.target.value) }}
                            />
                        </Form.Field>
                        <Form.Submit
                            onClick={() => handleSubmit()}
                        >
                            <Form.SaveIcon />
                            <Form.Text>Save</Form.Text>
                        </Form.Submit>
                    </Form.Body>
                </Form>
            )}
        </>
    )
}

const mapState = ({postModel}) => {
    return {
        post: postModel.post,
    }
}

const mapDispatch = dispatch => {
    return {
        setShowForm: dispatch.postModel.setShowForm,
        updatePostBy: dispatch.postModel.updatePostBy,
    }
}

export default connect(mapState, mapDispatch)(PostUpdateContainer);