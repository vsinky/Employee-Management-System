
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './signup.css';

function SignUp() {
  // const onSubmitHandler = (e) => {
  //   e.preventDefault();
  // console.log(e.target[0].value, e.target[1].value, e.target[2].value);
  // }
  let navigate = useNavigate();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    let user = {};
    const fields = ['firstName', 'lastName', 'password', 'confirmPassword'];
    for (const key in fields) {
      user = {
        ...user,
        [fields[key]]: e.target[key].value,
      };
    }
    const username = `${user.firstName}_${user.lastName}`;
    localStorage.setItem('username', username);
    localStorage.setItem('password', user.password);
    if(user.password && user.firstName){
      navigate('/');
    }
  };
  return (
    <div className='container'>
      <div className='signUp-container'>
        <h3>Signup Form</h3>
        <Form onSubmit={onSubmitHandler}>
          <Form.Group className='mb-3' controlId='formBasicFirstName'>
            <Form.Label>First Name</Form.Label>
            <Form.Control type='text' placeholder='Enter First Name' />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicLastName'>
            <Form.Label>Last Name</Form.Label>
            <Form.Control type='text' placeholder='Enter Last Name' />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicConfirmPassword'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type='password' placeholder='Confirm Password' />
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
  );
}

export default SignUp;