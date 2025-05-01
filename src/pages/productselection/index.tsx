import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CheckoutForm from "@/pages/checkout";

const products = {
  "Yellow": {
    images: ["./img/goods/1/type-1.jpg"],
    price: 160,
    URL: "https://buy.stripe.com/test_28o8yT5phcrH1aw9AB",
  },
  "White and Red": {
    images: ["./img/goods/1/type-2.jpg"],
    price: 160,
    URL: "https://buy.stripe.com/test_6oE7uP6tl77n5qM3ce",
  },
  "Beige Bicycles": {
    images: ["./img/goods/1/type-3.jpg"],
    price: 160,
    URL: "https://buy.stripe.com/test_aEUg1l9Fx1N33iEdQT",
  },
  "Navy Blue": {
    images: ["./img/goods/1/type-4.jpg"],
    price: 160,
    URL: "https://buy.stripe.com/test_3cs4iD8BtbnDcTe004",
  },
  "Beige Animals": {
    images: ["./img/goods/1/type-5.jpg"],
    price: 160,
    URL: "https://buy.stripe.com/test_7sIcP9eZR1N39H2eUZ",
  },
  "Donuts": {
    images: ["./img/goods/1/type-6.jpg", "./img/goods/1/type-6-2.jpg", "./img/goods/1/type-6-7.jpg", "./img/goods/1/type-6-8.jpg"],
    price: 160,
    URL: "https://buy.stripe.com/test_8wM5mH6tlcrHg5q28e",
  },
};

const ProductSelection: React.FC = () => {
  const getInitialColor = (): keyof typeof products => {
    const saved = sessionStorage.getItem("selectedColor");
    return (saved && saved in products) ? (saved as keyof typeof products) : "Yellow";
  };


  const [selectedColor, setSelectedColor] = useState<keyof typeof products>(getInitialColor);
  const [mainImage, setMainImage] = useState(products[getInitialColor()].images[0]);
  const [showCheckout, setShowCheckout] = useState(false);

  useEffect(() => {
    sessionStorage.setItem("selectedColor", selectedColor);
    setMainImage(products[selectedColor].images[0]); // не забудь обновлять mainImage
  }, [selectedColor]);


  const handleColorChange = (color: keyof typeof products) => {
    setSelectedColor(color);
    setMainImage(products[color].images[0]);
  };

  const currentProduct = products[selectedColor];

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-[#F25826]">Buy Toob in New Zealand</h2>
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
            {currentProduct.images.map((src, index) => (
              <img
                key={index}
                className="w-12 h-auto object-cover rounded-lg cursor-pointer border border-amber-500 hover:border-[#F25826]"
                src={src}
                alt=""
                onClick={() => setMainImage(src)}
              />
            ))}
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
          <p>Size: one size (approx 57X84cm) fits most rear-mounted child seats</p>

          <br />
          <div className="full-w text-center">
            {/* <button
              className="bg-[#F9EAD7] text-[#F25826] px-4 py-2 rounded font-bold mt-4"
              onClick={() => setShowCheckout(true)}
            >
              Buy for {currentProduct.price} NZD
            </button> */}

            <Link to={currentProduct.URL} className="bg-[#F9EAD7] text-[#F25826] px-4 py-2 rounded font-bold mt-4">
              Buy for {currentProduct.price} NZD
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
              className="absolute top-2 right-2 text-gray-700 hover:text-black"
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
