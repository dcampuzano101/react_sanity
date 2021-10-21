import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div class='h-36 w-auto border-white border-4 flex flex-row'>
      <div class='w-1/3 h-full flex-initial border-black border-4 flex justify-center items-center'>
        <Link
          to='/'
          class='font-rubik xl:text-7xl lg:text-4xl md:lg:text-3xl transition'
        >
          MERKYOASS
        </Link>
      </div>
      <div class='w-full border-red-300 border-4 h-full flex flex-row justify-end items-center'>
        <Link
          to='/posts'
          class='w-1/6 font-karla xl:text-3xl lg:text-2xl md:text-xl flex justify-center'
        >
          <div class='transition-all p-2 border-transparent border-b-2 hover:border-black'>
            POSTS
          </div>
        </Link>
        <Link
          to='/about'
          class='w-1/6 font-karla xl:text-3xl lg:text-2xl md:text-xl flex justify-center'
        >
          <div class='transition-all p-2 border-transparent border-b-2 hover:border-black'>
            ABOUT
          </div>
        </Link>
        <Link
          to='/contact'
          class='w-1/6 font-karla xl:text-3xl lg:text-2xl md:text-xl flex justify-center'
        >
          <div class='transition-all p-2 border-transparent border-b-2 hover:border-black'>
            CONTACT
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
