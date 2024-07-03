import React from 'react'

const Footer = () => {
  return (
    <div className='h-40 bg-slate-800 flex justify-around items-center'>
      <div className="text flex gap-3 text-2xl font-bold">
            <img className='h-8' src="src/pic/logo.svg" alt="logo" />
            <h1 className='text-white'>Furnitura</h1>
        </div>
        <div className="a">
            <ul className="flex flex-col text-white gap-1 "> Links
                <li className="text-white">Home</li>
                <li className="text-white">About</li>
                <li className="text-white">Products</li>
                <li className="text-white">Contact</li>
            </ul>
        </div>
        <div className="a">
            <ul className="flex flex-col text-white gap-2"> Contact
                <li className="text-white">FAQ</li>
                <li className="text-white">BLOG</li>
                <li className="text-white">Contact</li>
        
            </ul>
        </div>
        <div className="a">
            <ul className="flex flex-col text-white gap-2" > Contact
                <li className="text-white">1800-32-122</li>
                <li className="text-white">Furnita@gmail.com</li>
                <div className="flex gap-1">
                <img className="h-4" src="src/pic/fb.svg" alt="" />
                <img className="h-4" src="src/pic/insta.svg" alt="" />
                <img className="h-4" src="src/pic/yt.svg" alt="" />
                <img className="h-4" src="src/pic/twitter.svg" alt="" /> 
               </div>
                
            </ul>
        </div>
    </div>
  )
}

export default Footer
