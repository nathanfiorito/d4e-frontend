import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import SurveyHeader from '../../components/SurveyHeader/SurveyHeader';
import {api, config} from '../../services/api';

export default function CreateSurvey() {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    function submit() {
        const body = {
            title: title,
            description: description
        }

        api.post('/surveys', 
            body, 
            config
        ).then(res => {
            
        }).catch(err => console.log(err))
    }

    return (
        <div>
            <SurveyHeader/>
        <Container className='justify-content-md-center'>
            <Form>
            <Form.Group controlId='title'>
                <Form.Label>Survey Title</Form.Label>
                <Form.Control type='text' placeholder='Enter title' onChange={(event) => {setTitle(event.target.value)}}/>
            </Form.Group>
            <Form.Group controlId='description'>
                <Form.Label>Description</Form.Label>
                <Form.Control type='text' placeholder='Enter description' onChange={(event) => {setDescription(event.target.value)}}/>
            </Form.Group>
            <Button variant='primary' type='button' onClick={submit}>
                Create
            </Button>
            </Form>
        </Container>
        </div>
    );
}