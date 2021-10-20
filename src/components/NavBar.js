import React from 'react';

const NavBar = (props) => (
  <div class='h-36 w-auto border-white border-4 flex flex-row'>
    <div class='w-1/3 h-full flex-initial border-black border-4 flex justify-center items-center'>
      <div class='font-rubik text-7xl'>MERKYOASS</div>
    </div>
    <div class='w-full border-red-300 border-4 h-full flex flex-row justify-end items-center'>
      <div class='w-1/6 font-karla text-3xl flex justify-center'>POSTS</div>
      <div class='w-1/6 font-karla text-3xl flex justify-center'>ABOUT</div>
      <div class='w-1/6 font-karla text-3xl flex justify-center'>CONTACT</div>
    </div>
  </div>
);

export default NavBar;
