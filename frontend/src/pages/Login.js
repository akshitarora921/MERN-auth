import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToken } from "../hooks/useToken";
function Login() {
  const [, setToken] = useToken();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await axios.post("http://localhost:3030/api/login", {
      email,
      password,
    });
    const { token } = result.data;

    setToken(token);
    navigate("/");
  };
  return (
    <div className='min-h-screen bg-blue-400 flex justify-center items-center '>
      <div className='absolute w-60 h-60 rounded-xl bg-blue-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block'></div>
      <div className='absolute w-48 h-48 rounded-xl bg-blue-300 bottom-6 right-10 transform rotate-12 hidden md:block'></div>
      <div className='py-12 px-12 bg-white rounded-2xl shadow-xl z-20'>
        <div>
          <h1 className='text-3xl font-bold text-center mb-4 cursor-pointer'>
            Login
          </h1>
          <p className='w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer'>
            Login to enjoy all the services without any ads for free!
          </p>
        </div>
        <div className='space-y-4'>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email Address'
            className='block text-sm py-3 px-4 rounded-lg w-full border outline-none'
          />
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            className='block text-sm py-3 px-4 rounded-lg w-full border outline-none'
          />
        </div>
        <div className='text-center mt-6'>
          <button
            onClick={handleLogin}
            className='py-3 w-64 text-xl text-white bg-blue-400 rounded-2xl'
          >
            Login
          </button>
          <p className='mt-4 text-sm'>
            Create a new account?{" "}
            <Link to='/signup' className='underline cursor-pointer'>
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      <div className='w-40 h-40 absolute bg-blue-300 rounded-full top-0 right-12 hidden md:block'></div>
      <div className='w-20 h-40 absolute bg-blue-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block'></div>
    </div>
  );
}

export default Login;
