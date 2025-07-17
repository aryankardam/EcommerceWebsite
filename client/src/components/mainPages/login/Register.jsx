import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../utils/axiosInstance'; // ✅ Use baseURL-configured Axios

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/user/register', user); // ✅ cleaner syntax

      localStorage.setItem('firstRegister', true);
      window.location.href = '/';
    } catch (err) {
      alert(err?.response?.data?.msg || 'Registration failed.');
    }
  };

  return (
    <div className='register-page'>
      <form onSubmit={registerSubmit}>
        <input
          type='text'
          name='name'
          required
          placeholder='Name'
          autoComplete='name'
          value={user.name}
          onChange={onChangeInput}
        />
        <input
          type='email'
          name='email'
          required
          placeholder='Email'
          autoComplete='email'
          value={user.email}
          onChange={onChangeInput}
        />
        <input
          type='password'
          name='password'
          required
          placeholder='Password'
          autoComplete='new-password'
          value={user.password}
          onChange={onChangeInput}
        />

        <div className='row'>
          <button type='submit'>Register</button>
          <Link to='/login'>Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
