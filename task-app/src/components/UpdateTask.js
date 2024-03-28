import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTask } from '../Redux/actions/taskActions';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function UpdateTask({ match }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const task = useSelector(state => state.tasks.find(task => task.id === match.params.id));

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTask(match.params.id, { title, description }));
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h1>Update Task</h1>
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
              Update Task
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default UpdateTask;