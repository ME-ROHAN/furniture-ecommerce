import React from 'react';
// import './styles.css'; // Ensure this import is present

const Navbar = () => {
  return (
    <div className='w-full flex flex-col sm:flex-row sm:px-10 z-10 fixed bg-gray-950 justify-between h-16 items-center  md:px-20 p-0 xl:px-80 '>
        <div className="text flex gap-3 text-2xl font-bold">
            <img className='h-8' src="src/pic/logo.svg" alt="logo" />
            <h1 className='text-white'>Furnitura</h1>
        </div>
        <div className="text">
            <ul className="flex gap-4 sm:gap-x-14">
                <a href="">
                    <li className="relative text-white underline-hover">Home</li>
                </a>
                <a href="">
                    <li className="relative text-white underline-hover">About</li>
                </a>
                <a href="">
                    <li className="relative text-white underline-hover">Services</li>
                </a>
                <a href="">
                    <li className="relative text-white underline-hover">Contact</li>
                </a>
            </ul>
        </div>
    </div>
  );
}

export default Navbar;
