import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

function Profile() {
  const user = useSelector(state => state.user);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h1>Profile</h1>
          <p>Username: {user.username}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;