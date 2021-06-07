import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { signIn, isAuthenticated } from '../../services/auth';

import './Login.css';

export default function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  async function submit() {
    signIn(username, password).then((result) => {
      console.log('history')
      history.push('/surveys')
    })
    
    // signIn(username, password);
    // console.log('loggado')
    // if(isAuthenticated()) {
    //   history.push('/surveys');
    //   console.log('nao deu push')
    // }
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