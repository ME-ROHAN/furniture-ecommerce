import React from 'react'

const Products = () => {

    const product = [
        {   img:"src/pic/sof.jpg",
            title: "Sofa Sets",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nobis, deleniti soluta rem culpa expedita.",
            official_price : 2000,
            discprice:1500 
        },
        {   img:"src/pic/living.webp",
            title: "Living Room",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nobis, deleniti soluta rem culpa expedita.",
            official_price : 2000,
            discprice:1500 
        },
        {   img:"src/pic/dining.jpg",
            title: "Dining Room",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nobis, deleniti soluta rem culpa expedita.",
            official_price : 2000,
            discprice:1500 
        },
        {   img:"src/pic/home.jpg",
            title: "Home Office",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nobis, deleniti soluta rem culpa expedita.",
            official_price : 2000,
            discprice:1500 
        },
        {   img:"src/pic/grand.webp",
            title: "Modern Sofa Set",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nobis, deleniti soluta rem culpa expedita.",
            official_price : 2000,
            discprice:1500 
        },
        {   img:"src/pic/mmodern sofa.jpg",
            title: "Grand Living set",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nobis, deleniti soluta rem culpa expedita.",
            official_price : 2000,
            discprice:1500 
        }
    ]

  return (
    <>
    <div className='flex flex-wrap justify-between sm:justify-center xl:justify-between'>
      {product.map((item,index)=>(
            <div  key={index} className='group w-[470px] h-[500px]  mt-20 shadow-lg shadow-black-800/40 rounded-xl hover:scale-105 transition-all ease-in-out '>
                    <img className=' h-[300px] w-[470px] rounded-xl ' src={item.img} alt="" />
                 <div className='pl-5 mt-5'>
                 <h1 className='text-xl font-bold'>{item.title}</h1>
                 <p className='mt-2'>{item.desc}</p>
                 <div className='mt-2'>
                      <span className='text-gray-500 line-through text-sm'> ${item.official_price}</span>
                     <span className='ml-3 font-bold text-lg'>${item.discprice}</span>
                 </div>
               
                
                 
                </div>
                
            </div>
           
        ))
      }
    </div>
    </>
    
  )
}

export default Products
