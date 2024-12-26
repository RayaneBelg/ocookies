'use client'
import { useState } from "react";
import Image from "next/image";

export default function CookieBox({ products }) {
  const [cookieBox, setCookieBox] = useState([]);

  // Add a cookie to the box if there is space
  const addToBox = (cookie) => {
    if (cookieBox.length < 10) {
      setCookieBox([...cookieBox, cookie]);
    } else {
      alert("La boîte est pleine ! Vous ne pouvez pas ajouter plus de cookies.");
    }
  };

  // Remove a cookie from the box
  const removeFromBox = (index) => {
    setCookieBox(cookieBox.filter((_, i) => i !== index));
  };

  return (
    <div className="h-dvh bg-gradient-to-center">
      {/* Display cookie options */}
     
      {/* Display the cookie box */}
      <div className="">
        <h2 className="text-4xl font-bold font-pompiere text-center">Je compose ma boîte</h2>
        
        <div className="relative  mx-auto  p-4">
        <div className="flex justify-center">
        <p className="text-center text-lg  font-pompiere font-bold absolute right-2">
          {cookieBox.length}/10 
        </p>
        <img
            src="box1bi0.png"
            alt="Boîte de cookies"
            layout="fill"
            className="object-cover bg-slate-200 rounded-lg h-[25vh]"
          />

        </div>
         
          <div className=" inset-0 flex flex-wrap justify-center items-center gap-2 p-2">
            {cookieBox.map((cookie, index) => (
              <div
                key={index}
                className="p-2 border  flex items-center justify-center text-lg font-pompiere text-titleColor bg-slate-200 text-center "
                onClick={() => removeFromBox(index)}
              >
                {cookie.title}
              </div>
            ))}
          </div>
        </div>

       
      </div>
      <div className="w-full overflow-x-auto flex snap-x snap-mandatory mt-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="snap-start flex-shrink-0 bg-slate-200 rounded-lg flex flex-col p-4 m-4 "
          >
            <Image
              src={product.imageUrl}
              alt={product.title}
           
              className="h-[15vh] w-auto"
            />
            <h3 className="text-xl font-bold mt-4">{product.title}</h3>
            
            <button
              onClick={() => addToBox(product)}
              className="mt-4 bg-titleColor text-white px-4 py-2 rounded "
            >
              +
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}
