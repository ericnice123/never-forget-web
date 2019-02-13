import React, { Component } from "react";
import { Button, Form, Container } from "react-bootstrap";

class SignIn extends Component {
  render() {
    return (
      <Container>
        <Form>
          <Form.Group controlId="formUserAccount">
            <Form.Label>User Account</Form.Label>
            <Form.Control type="text" placeholder="Enter User Account" />
          </Form.Group>

          <Form.Group controlId="formUserPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            formAction="https://www.google.com"
          >
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

export default SignIn;
