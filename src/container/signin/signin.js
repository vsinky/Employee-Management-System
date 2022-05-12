import React from 'react'
import {Button, Form }from 'react-bootstrap';
import './signin.css';

const SignIn=() => {
  return (
    <div className='container'>
            <div className='signIn-container'>
            <Form>
                    <Form.Group className="mb-3" controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter Username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <p>Create new account? <a href='/signup'>Click Here</a></p>
                    <Button variant='primary' type='submit'>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
  )
}

export default SignIn;