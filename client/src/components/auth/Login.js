import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const updateForm = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmited = async e => {
    e.preventDefault();
    if (password) {
      console.log("Passwords not mutch!");
    } else {
      console.log("Seccess!");
    }
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Sign In</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Sign In Your Account
      </p>
      <form className='form' onSubmit={e => onSubmited(e)}>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={e => updateForm(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            minLength='6'
            value={password}
            onChange={e => updateForm(e)}
            required
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Login' />
        <p className='my-1'>
          Don't have an account? <Link to='/register'>Sign Up</Link>
        </p>
      </form>
    </Fragment>
  );
};

export default Login;
