import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../Redux/actions/taskActions';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function AddTask() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ title, description }));
    setTitle('');
    setDescription('');
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h1>Add Task</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Add Task
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AddTask;