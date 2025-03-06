import React, { useState } from "react";
import CheckoutForm from "@/pages/checkout";
import ImageDisplay from "@/components/imagedisplay";

const products = {
  "Neon pink": ["./img/goods/1/neon_pink_1.png"],
  "Lime Green": ["./img/goods/1/lime_green_1.png"],
  "Dust pink": [
    "./img/goods/1/dust_pink_1.png",
    "./img/goods/1/dust_pink_2.png",
  ],
  "Navy Blue": [
    "./img/goods/1/navy_blue_1.png",
    "./img/goods/1/navy_blue_2.png",
  ],
  Orange: ["./img/goods/1/orange_1.png", "./img/goods/1/orange_2.png"],
};

const ProductSelection: React.FC = () => {
  const [selectedColor, setSelectedColor] =
    useState<keyof typeof products>("Dust pink");
  const [showCheckout, setShowCheckout] = useState(false);
  const [mainImage, setMainImage] = useState(products[selectedColor][0]);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold">Buy toob</h2>
      <br></br>

      <div className="flex flex-col md:flex-row items-center md:items-start w-full gap-8">
        <div className="flex flex-col items-center max-w-lg w-full md:w-1/2">
          <img
            className="w-full object-contain border rounded-lg max-h"
            src={mainImage}
            alt=""
          />
          <br />
          <select
            className="border p-2 w-full"
            value={selectedColor}
            onChange={(e) => {
              const color = e.target.value as keyof typeof products;
              setSelectedColor(color);
              setMainImage(products[color][0]);
            }}
          >
            {Object.keys(products).map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
          <div className="flex flex-wrap gap-2 mt-4 w-full justify-left">
            {Object.values(products)
              .flat()
              .map((src, index) => (
                <img
                  key={index}
                  className="w-12 h-auto object-cover rounded-lg cursor-pointer border hover:border-[#F25826]"
                  src={src}
                  alt=""
                  onClick={() => setMainImage(src)}
                />
              ))}
          </div>
        </div>

        <div className="max-w-lg text-gray-800 text-justify md:w-1/2">
          <p>TOOB blankets for child bike seats - handmade in Wellington</p>
          <br />
          <p>
            <strong>Specifications:</strong>
            <br />
            Outer material: waterproof and windproof high-quality PUL
            (PolyUrethane Laminate)
            <br />
            Inner material: thick arctic fleece
            <br />
            Reflective tape on the back
            <br />
            Size: one size (approx 57X84cm) fits most rear-mounted child seats
          </p>
          <br />
          <div className="full-w text-center">
            <button
              className="bg-[#F9EAD7] text-[#F25826] px-4 py-2 rounded font-bold mt-4"
              onClick={() => setShowCheckout(true)}
            >
              Buy for 160 NZD
            </button>
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
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
              onClick={() => setShowCheckout(false)}
            >
              ✕
            </button>
            <CheckoutForm product={selectedColor} price={160} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSelection;
