import React, { useState } from "react";

function UserInfo() {
  return (
    <div className='min-h-screen bg-teal-400 flex justify-center items-center '>
      <div className='absolute w-60 h-60 rounded-xl bg-teal-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block'></div>
      <div className='absolute w-48 h-48 rounded-xl bg-teal-300 bottom-6 right-10 transform rotate-12 hidden md:block'></div>
      <div className='py-12 px-12 bg-white rounded-2xl shadow-xl z-20'>
        <div>
          <h1 className='text-3xl font-bold text-center mb-4 cursor-pointer'>
            User Info
          </h1>
          <p className='w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer'>
            Private page, Submit private data
          </p>
        </div>
        <div className='space-y-4'>
          <div className=''>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              for='food'
            >
              Favorite Food
            </label>
            <input
              type='text'
              placeholder='Pizza'
              className='block text-sm py-3 px-4 rounded-lg w-full border outline-none'
            />
          </div>
          <div className=''>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              for='food'
            >
              Favorite Sports
            </label>
            <input
              type='text'
              placeholder='Cricket'
              className='block text-sm py-3 px-4 rounded-lg w-full border outline-none'
            />
          </div>
          <div className=''>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              for='food'
            >
              Bio
            </label>
            <input
              type='text'
              placeholder='Loves to code'
              className='block text-sm py-3 px-4 rounded-lg w-full border outline-none'
            />
          </div>
        </div>
        <div className='text-center mt-6'>
          <button className='py-3 w-64 text-xl text-white bg-teal-400 rounded-2xl'>
            Submit
          </button>
        </div>
      </div>
      <div className='w-40 h-40 absolute bg-teal-300 rounded-full top-0 right-12 hidden md:block'></div>
      <div className='w-20 h-40 absolute bg-teal-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block'></div>
    </div>
  );
}

export default UserInfo;
