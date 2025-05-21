import React from 'react';

export default function LoginForm({ onLogin, register, errors }) {
  return (
    <form onSubmit={onLogin}>
      <div>
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          name='username'
          type='text'
          ref={register}
        />
        {errors.username && <p>{errors.username.message}</p>}
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input
          id='password'
          name='password'
          type='password'
          ref={register}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <button type='submit'>Log in</button>
    </form>
  );
}