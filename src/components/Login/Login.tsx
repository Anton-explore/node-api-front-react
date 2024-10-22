import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TextField from '../common/forms/TextField';

// interface LoginFormInputs {
//   email: string;
//   password: string;
// }

const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email format'),
  password: z.string().min(1, 'Password is required').min(6, 'Password must be at least 6 characters long'),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange'
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      console.log(data);
      // await axios.post('/api/login', data, { withCredentials: true });
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Email"
        error={errors.email}
        inputProps={{ ...register('email'), placeholder: 'Email' }}
      />
      <TextField
        label="Password"
        error={errors.password}
        inputProps={{ ...register('password'), type: 'password', placeholder: 'Password' }}
      />
      <button
        className="btn btn-primary w-100 mx-auto"
        type="submit"
        disabled={!isValid}
      >Login</button>
    </form>
  );
}

export default Login;