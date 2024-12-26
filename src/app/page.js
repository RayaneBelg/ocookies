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
        <img className="h-[10vh] w-auto m-4" src="../ocookies.png" alt="O'cookies logo" />
      </div>

      <h2 className="text-2xl font-bold font-pompiere uppercase">Livraisons de cookies à domicile</h2>

      <div className="w-full overflow-x-auto flex snap-x snap-mandatory mt-8">
        {cookieProducts.map((product, index) => (
          <div
            key={index}
            className="snap-start flex-shrink-0 bg-slate-200 rounded-lg shadow-md p-4 m-4 w-72"
          >
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={300}
              height={300}
              className="rounded-lg"
            />
            <h3 className="text-2xl font-pompiere uppercase font-extrabold mt-4">{product.title}</h3>
            <p className="mt-2">{product.description}</p>
            <p className="text-3xl text-titleColor font-pompiere font-semibold mt-4">{product.price.toFixed(2)} €</p>
          </div>
        ))}
      </div>

     
    </div>
    <CookieBox products={cookieProducts}/>
    </div>
  );
}
