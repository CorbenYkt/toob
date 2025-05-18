import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CheckoutForm from "@/pages/checkout";
import products from "@/data/products";

const ProductSelection: React.FC = () => {
  const getInitialColor = (): keyof typeof products => {
    const saved = sessionStorage.getItem("selectedColor");
    return (saved && saved in products) ? (saved as keyof typeof products) : "Flower TOOB";
  };


  const [selectedColor, setSelectedColor] = useState<keyof typeof products>(getInitialColor);
  const [mainImage, setMainImage] = useState(products[getInitialColor()].images[0]);
  const [showCheckout, setShowCheckout] = useState(false);

  useEffect(() => {
    sessionStorage.setItem("selectedColor", selectedColor);
    setMainImage(products[selectedColor].images[0]);
  }, [selectedColor]);


  const handleColorChange = (color: keyof typeof products) => {
    setSelectedColor(color);
    setMainImage(products[color].images[0]);
  };

  const currentProduct = products[selectedColor];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-[#F25826]">Shop</h2>
      <br />

      <div className="flex flex-col md:flex-row items-center md:items-start w-full gap-8">
        <div className="flex flex-col items-center max-w-lg w-full md:w-1/2">
          <img
            className="w-full object-contain rounded-lg max-h"
            src={mainImage}
            alt=""
          />
          <br />
          <select
            className="border border-amber-500 p-2 w-full"
            value={selectedColor}
            onChange={(e) => handleColorChange(e.target.value as keyof typeof products)}
          >
            {Object.keys(products).map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
          <div className="flex flex-wrap gap-2 mt-4 w-full justify-left">
            {Object.entries(products).flatMap(([color, product]) =>
              product.images.map((src, index) => (
                <img
                  key={`${color}-${index}`}
                  className={`w-12 h-auto object-cover rounded-lg cursor-pointer 
          border ${mainImage === src ? 'border-[#F25826]' : 'border-amber-500'} 
          hover:border-[#F25826]`}
                  src={src}
                  alt=""
                  onClick={() => {
                    setMainImage(src);
                    setSelectedColor(color as keyof typeof products);
                  }}
                />
              ))
            )}
          </div>
        </div>

        <div className="max-w-lg text-gray-800 text-justify md:w-1/2">
          <p>
            <strong>Specifications:</strong>
          </p>
          <p className="mt-6">
            Outer material: waterproof and windproof high-quality PUL (PolyUrethane Laminate)
          </p>
          <p>Inner material: thick arctic fleece</p>
          <p>Reflective tape on the back</p>

          <div className="full-w text-center mt-10 mb-8">
            <Link
              to={currentProduct.URL}
              className="bg-[#F9EAD7] text-[#F25826] px-8 py-4 rounded font-bold mt-4 transition-colors duration-300 hover:bg-[#F25826] hover:text-white"
            >
              Buy {selectedColor} for {currentProduct.price} NZD
            </Link>
          </div>
        </div>
      </div>

      {showCheckout && (
        <div
          className="fixed inset-0 bg-gray-600/50 flex justify-center items-center z-50"
          onClick={() => setShowCheckout(false)}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-800 hover:text-black"
              onClick={() => setShowCheckout(false)}
            >
              ✕
            </button>
            <CheckoutForm product={selectedColor} price={currentProduct.price} />
          </div>
        </div>
      )}
    </div>
  );


};

export default ProductSelection;
