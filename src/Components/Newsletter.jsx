import React from 'react'

const Newsletter = () => {
  return (
    <div className='h-96 bg-slate-800 flex flex-col 2xl:flex-row justify-center items-center p:0  2xl:px-40'>
        <div className="flex gap-10">
            <img className='h-50 w-40' src="src/pic/living.webp" alt="" />
            <img className='h-50 w-40' src="src/pic/sofa.avif" alt="" />
        </div>
        <div className="flex flex-col 2xl:ml-80 justify-center items-center  gap-5  " >    
            <h1 className='text-white font-bold text-2xl '>Subscribe to Our Newsletter</h1>
        <div className='flex  h-3'>
             <input type="email" placeholder='Your email address'  className='p-5 md:w-[500px] '/>
         <button className='bg-yellow-500 text-white h-[40px] px-3'>Subscribe</button>
        </div>
       </div>
    </div>
  )
}

export default Newsletter
