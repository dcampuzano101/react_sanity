import React from 'react';
import { Link } from 'react-router-dom';

const Main = (props) => {
  return (
    <div className='max-w-full flex justify-center h-full'>
      <div className='w-11/12 h-full flex p-5 items-center'>
        <div className='border-4 border-red-400 w-1/3 m-5 h-1/2 rounded-md'>
          CARD 1
        </div>
        <div className='border-4 border-black w-1/3 m-5 h-1/2 rounded-md'>
          CARD 2
        </div>
        <div className='border-4 border-green-400 w-1/3 m-5 h-1/2 rounded-md'>
          CARD 3
        </div>
      </div>
    </div>
  );
};

export default Main;
