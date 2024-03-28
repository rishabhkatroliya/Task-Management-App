import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

function DeleteTask({ onDelete }) {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h1>Delete Task</h1>
          <p>Are you sure you want to delete this task?</p>
          <Button variant="danger" onClick={onDelete}>Delete</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default DeleteTask;