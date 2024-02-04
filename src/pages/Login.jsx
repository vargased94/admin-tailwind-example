import React from 'react';

function Login(props) {
  return (
    <div className="bg-neutral-950 h-screen flex justify-center items-center">
      <div className='bg-white text-center p-5 rounded-md w-1/4'>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-black">
            Sign in to your account
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Login;