import React from 'react'
import { Button, Form } from 'react-bootstrap';
import './signup.css';

function SignUp() {
  return (
    <div className='container'>

      <div className='signIn-container'>
        <Form>
        <Form.Group className="mb-3" controlId="firstName">
            <Form.Control type="text" placeholder="Enter First Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="lastName">
            <Form.Control type="text" placeholder="Enter Last Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="username">
            <Form.Control type="text" placeholder="Enter Username" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>

          <p>
            Already Have a account? <a href='/'>Click Here</a>
          </p>
           <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default SignUp;