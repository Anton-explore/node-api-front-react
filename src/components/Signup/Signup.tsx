import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface SignupFormInputs {
  name: string;
  email: string;
  password: string;
}

const Signup: React.FC = () => {
  const { register, handleSubmit } = useForm<SignupFormInputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SignupFormInputs> = async (data) => {
    try {
      console.log(data);
      // await axios.post('/api/signup', data, { withCredentials: true });
      navigate('/');
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} placeholder="Name" />
      <input {...register('email')} placeholder="Email" />
      <input {...register('password')} type="password" placeholder="Password" />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Signup;