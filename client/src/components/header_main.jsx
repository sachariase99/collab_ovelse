import React from 'react';
import { useLocation } from 'react-router-dom';

const Header_main = () => {
  const location = useLocation();

  // Conditionally render the header based on the route
  if (location.pathname === '/student') {
    return null; // Don't render the header on the Studentpage
  }

  return (
    <div>
      <h1 className='bg-[darkblue] text-white text-5xl text-center p-10 font-bold uppercase '>Gruppe Jannick</h1>
    </div>
  );
}

export default Header_main;
