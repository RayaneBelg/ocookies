'use client';

import Image from "next/image";
import CookieBox from "./Component/CookieBox.jsx";
import { cookieProducts } from "./data.js";
import CookieBoxTwo from "./Component/CookieboxTwo.jsx";

export default function Home() {
  return (
    <div>

   
    <div className=" h-dvh bg-gradient-to-center flex flex-col items-center overflow-x-hidden">
      <div>
        <img className="h-[15vh] w-auto m-2" src="../ocookies.png" alt="O'cookies logo" />
      </div>

      <h2 className="text-3xl font-bold font-pompiere uppercase my-2">Livraisons de cookies</h2>

      <div className="w-full overflow-x-auto flex snap-x snap-mandatory my-2 ">
        {cookieProducts.map((product, index) => (
          <div
            key={index}
            className=" border-2 border-titleColor snap-center flex-shrink-0 bg-slate-200 rounded-lg shadow-lg shadow-titleColor p-4 m-4 w-72"
          >
            <h3 className="text-3xl font-pompiere uppercase font-bold mt-4 text-center">{product.title}</h3>
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={300}
              height={300}
              className="rounded-lg"
            />
            
  
            <p className="text-xl text-titleColor font-pompiere font-semibold mt-4 text-end">{product.price.toFixed(2)} €</p>
          </div>
        ))}
      </div>

      <button className="text-2xl font-pompiere font-bold uppercase p-2 border-2 border-black rounded-lg my-2">Commander</button>

     
    </div>
   
    </div>
  );
}
