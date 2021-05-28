import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Redirect } from 'react-router';
import api from '../../services/api';

import './Login.css';

export default function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  function submit() {
    api.post('auth/signin',{
      username: username,
      password: password
    }).then((res) => {
      localStorage.setItem('accessToken', res.data.accessToken)
    })
  }

  return (
    <div>
      <Container className='justify-content-md-center'>
        <Form>
          <Form.Group controlId='username'>
            <Form.Label>Username</Form.Label>
            <Form.Control type='text' placeholder='Enter username' onChange={(event) => {setUsername(event.target.value)}}/>
          </Form.Group>
          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Enter password' onChange={(event) => {setPassword(event.target.value)}}/>
          </Form.Group>
          <Button variant='primary' type='button' onClick={submit}>
            Connect
          </Button>
        </Form>
      </Container>
    </div>
  );
}