import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import GoBackButton from '../../components/GoBackButton/GoBackButton';
import SurveyHeader from '../../components/SurveyHeader/SurveyHeader';
import {api, config} from '../../services/api';

export default function CreateVoteOption() {
    const [voteOptionName, setVoteOptionName] = useState();
    const [image, setImage] = useState();
    const {surveyId } = useParams()
    const history = useHistory();

    function submit() {
        const body = {
            voteOptionName: voteOptionName,
            image: image
        }

        api.post(`/vote-option/${surveyId}`, 
            body, 
            config
        ).then(res => {

        }).catch(err => console.log(err))

        history.push(`/survey/${surveyId}`)
    }

    return (
        <div>
            <SurveyHeader/>
        <Container className='justify-content-md-center'>
            <GoBackButton/>
            <Form>
            <Form.Group controlId='voteOptionName'>
                <Form.Label>Vote Option Name</Form.Label>
                <Form.Control type='text' placeholder='Enter vote option name' onChange={(event) => {setVoteOptionName(event.target.value)}}/>
            </Form.Group>
            <Form.Group controlId='image'>
                <Form.Label>Image URL</Form.Label>
                <Form.Control type='text' placeholder='Enter image URL' onChange={(event) => {setImage(event.target.value)}}/>
            </Form.Group>
            <Button variant='primary' type='button' onClick={submit}>
                Create
            </Button>
            </Form>
        </Container>
        </div>
    );
}