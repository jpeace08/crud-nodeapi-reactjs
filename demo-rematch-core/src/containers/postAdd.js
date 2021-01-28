import React, {useState} from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Form from '../components/form';

const PostAddContainer = ({post, addPost}) => {

    const history = useHistory();

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = async e => {
        await addPost({ title, body });
        history.push('/feeds');
    }

    return (
        <>
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
        </>
    )
}

const mapState = state => {
    return {
        post: state.postModel.post,
    }
}

const mapDispatch = dispatch => {
    return {
        addPost: dispatch.postModel.addPost,
    }
}

export default connect(mapState, mapDispatch)(PostAddContainer);