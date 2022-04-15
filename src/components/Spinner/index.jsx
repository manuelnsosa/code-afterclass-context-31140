import { React } from 'react';

const Spinner = () => (
  <div className='fixed top-0 right-0 h-screen w-screen z-30 flex justify-center items-center'>
    <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500'></div>
  </div>
);

export default Spinner;
