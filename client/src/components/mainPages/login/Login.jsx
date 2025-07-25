import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../utils/axiosInstance';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/user/login', user); // cleaner spread removed
      localStorage.setItem('firstLogin', true);
      window.location.href = '/';
    } catch (err) {
      alert(err.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <div className='login-page'>
      <form onSubmit={loginSubmit}>
        <input
          type='email'
          name='email'
          required
          placeholder='Email'
          value={user.email}
          onChange={onChangeInput}
        />
        <input
          type='password'
          name='password'
          required
          placeholder='Password'
          value={user.password}
          onChange={onChangeInput}
          autoComplete='current-password' // 🔐 accessibility suggestion
        />

        <div className='row'>
          <button type='submit'>Login</button>
          <Link to='/register'>Register</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
