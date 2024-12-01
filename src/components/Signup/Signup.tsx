import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TextField from '../common/forms/TextField';
import RadioSelect from '../common/forms/RadioSelect';

interface SignupFormInputs {
  name: string;
  email: string;
  password: string;
  password2: string;
  role: string;
}

const signupSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email format'),
  password: z.string().min(1, 'Password is required').min(6, 'Password must be at least 6 characters long'),
  password2: z.string().min(1, 'Please confirm your password'),
  role: z.enum(['user', 'publisher']).default('user')
}).refine((data) => data.password === data.password2, {
  message: 'Passwords do not match',
  path: ['password2'],
});

const options = [
  {
    label: 'Regular User (Browse, Write reviews, etc)',
    value: 'user'
  },
  {
    label: 'Bootcamp Publisher',
    value: 'publisher'
  }
]

const Signup: React.FC = () => {
  // const { register, handleSubmit } = useForm<SignupFormInputs>();
  // const navigate = useNavigate();

  // const onSubmit: SubmitHandler<SignupFormInputs> = async (data) => {
  //   try {
  //     console.log(data);
  //     // await axios.post('/api/signup', data, { withCredentials: true });
  //     navigate('/');
  //   } catch (error) {
  //     console.error('Signup failed:', error);
  //   }
  // };

  const { register, handleSubmit, formState: { errors, isValid } } = useForm<SignupFormInputs>({
    resolver: zodResolver(signupSchema),
    mode: 'onChange'
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SignupFormInputs> = async (data) => {
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
        label="Name"
        error={errors.name}
        inputProps={{ ...register('name'), placeholder: 'Enter full name' }}
      />
      <TextField
        label="Email Address"
        error={errors.email}
        inputProps={{ ...register('email'), placeholder: 'Enter email' }}
      />
      <TextField
        label="Password"
        error={errors.password}
        inputProps={{ ...register('password'), type: 'password', placeholder: 'Enter password' }}
      />
      <TextField
        label="Confirm Password"
        error={errors.password2}
        inputProps={{ ...register('password2'), type: 'password', placeholder: 'Confirm password' }}
      />

      <RadioSelect
        title="User Role"
        name="role"
        options={options}
        inputProps={{ ...register('role') }}
        error={errors.role}
        defaultValue={options[0].value}
      />

      <p className="text-danger">
        * You must be affiliated with the bootcamp in some way to add it to DevCamper.
      </p>

      <button
        type="submit"
        className="btn btn-primary btn-block"
        disabled={!isValid}
      >
        Sign Up
      </button>

    </form>
  )

  // return (
  //   <form onSubmit={handleSubmit(onSubmit)}>
  //     <input {...register('name')} placeholder="Name" />
  //     <input {...register('email')} placeholder="Email" />
  //     <input {...register('password')} type="password" placeholder="Password" />
  //     <button type="submit">Sign Up</button>
  //   </form>
  // );
}

export default Signup;