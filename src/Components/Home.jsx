import React from 'react'

const Home = () => {
  return (
    <div className="  flex justify-center items-center  h-[100vh] bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('src/pic/sofa.avif')] bg-cover bg-fixed">
        <div className=' w-2/4 flex justify-center items-center flex-col mt-20'>
             <h1 className='text-5xl text-center text-white font-bold'>Transform Your Space with Our
         <br></br>
         Premium Furnitures.</h1>
         <p className='text-white whitespace-pre-line h-32 text-center mt-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque tempora dolores repudiandae dignissimos debitis aliquam voluptatibus
       hic iste assumenda impedit.
      </p>
        <div className='flex gap-10 mt-24 sm:mt-0'>
            <button className="bg-yellow-500  hover:bg-yellow-300 h-10 text-xs w-20 sm:w-40 text-black font-bold rounded-md">
            Shop Now
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-300 h-10 text-xs w-20  sm:w-40 text-black font-bold rounded-md">
                Explore
            </button>
        </div>
         
        </div>
        
    </div>
  )
}

export default Home
