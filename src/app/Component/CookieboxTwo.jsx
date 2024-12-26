import { useState } from "react";
import Image from "next/image";

export default function CookieBoxTwo({ products }) {
  const [cookieBox, setCookieBox] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Add a cookie to the box if there's space
  const addToBox = (cookie) => {
    if (cookieBox.length < 10) {
      setCookieBox((prev) => [...prev, cookie]);
    } else {
      alert("La boîte est pleine ! Vous ne pouvez pas ajouter plus de cookies.");
    }
  };

  // Remove a cookie from the box
  const removeFromBox = (index) => {
    setCookieBox((prev) => prev.filter((_, i) => i !== index));
  };

  // Toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-screen-lg mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4">Composez votre boîte de cookies</h2>

      {/* Display the cookie box */}
      <div className="relative w-72 h-48 bg-gray-200 rounded-lg shadow-lg">
        <Image
          src="/box1bi0.png"
          alt="Boîte de cookies"
          layout="fill"
          className="object-cover rounded-lg cursor-pointer"
          onClick={toggleModal}
        />
        <div className="absolute inset-0 flex flex-wrap justify-center items-center gap-2 p-4">
          {cookieBox.map((cookie, index) => (
            <div
              key={index}
              className="bg-white border rounded-full w-12 h-12 flex items-center justify-center text-xs text-center shadow-md cursor-pointer"
              onClick={() => removeFromBox(index)}
            >
              {cookie.title}
            </div>
          ))}
        </div>
      </div>
      <p className="text-center mt-2">{cookieBox.length}/10 cookies dans la boîte</p>

      {/* Modal for cookie selection */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-lg relative">
            <h3 className="text-xl font-bold mb-4">Sélectionnez vos cookies</h3>
            <div className="grid grid-cols-2 gap-4">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-gray-100 rounded-lg p-4 shadow-md"
                >
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    width={100}
                    height={100}
                    className="rounded-lg"
                  />
                  <h4 className="text-sm font-bold mt-2">{product.title}</h4>
                  <button
                    className="mt-2 bg-blue-500 text-white text-xs px-3 py-1 rounded hover:bg-blue-600"
                    onClick={() => {
                      addToBox(product);
                      toggleModal();
                    }}
                  >
                    Ajouter
                  </button>
                </div>
              ))}
            </div>
            <button
              className="absolute top-2 right-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={toggleModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
