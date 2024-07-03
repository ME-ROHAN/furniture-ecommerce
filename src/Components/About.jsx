import React from "react";
import Products from "./Products";

const About = () => {
  return (
  <div className=" flex justify-center pt-20 bg-slate-100">
    <div className="flex w-4/5 justify-center flex-col  ">
      <div className="flex gap-10 flex-col xl:flex-row">
        <div className="">
          <img className="border-2 border-dashed p-2 border-black " src="src/pic/abimg.png" alt="" />
        </div>
          <div className=" flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <img className="h-4" src="src/pic/breif.svg" alt="" />
              <span>What we do</span>
            </div>
          
          <h1 className="text-4xl font-bold">About Us</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Aspernatur, consectetur vero autem quaerat vitae pariatur.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit, similique delectus eius ad voluptas earum.
          </p>
          <div className="flex gap-1">
            <img className="h-4" src="src/pic/fb.svg" alt="" />
            <img className="h-4" src="src/pic/insta.svg" alt="" />
            <img className="h-4" src="src/pic/yt.svg" alt="" />
            <img className="h-4" src="src/pic/twitter.svg" alt="" />
          </div>
        </div>
      </div>
      <Products></Products>
    </div>
   
  </div>
    
  );
};

export default About;
