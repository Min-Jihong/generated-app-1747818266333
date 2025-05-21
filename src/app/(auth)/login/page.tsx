import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../../hooks/use-auth';
import LoginForm from '../../../components/forms/login-form';

export default function LoginPage() {
  const auth = useAuth();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onLogin = async (data) => {
    // Assume login action returns a success response after authentication
    const response = await auth.login(data.username, data.password);
    if (response.success) {
      // Redirect to product detail page upon successful login
      window.location.href = '/dashboard/product-detail';
    } else {
      // Handle login error (e.g., wrong credentials)
      alert('Failed to log in. Please check your credentials and try again.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <LoginForm onLogin={handleSubmit(onLogin)} register={register} errors={errors} />
    </div>
  );
}