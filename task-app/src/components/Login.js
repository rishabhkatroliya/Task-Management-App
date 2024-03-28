import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { loginUser } from '../Redux/actions/usersActions';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
   const user =  await dispatch(loginUser({ username, password }));
   if(user===true){
    if(isAuthenticated){
      navigate("/profile");
  
    }
    else{
      alert("Invalid username or password")
    }
   }
    setUsername('');
    setPassword('');
  };
  

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h1>Login</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;