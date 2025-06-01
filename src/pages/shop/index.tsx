import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import products from "@/data/products";
import { useLocation } from "react-router-dom";


const Shop: React.FC = () => {
  const [stockData, setStockData] = useState<Record<string, number>>({});
  const location = useLocation();
  const selectedFromState = location.state?.selected;

  const getInitialColor = (): keyof typeof products => {
    if (selectedFromState && selectedFromState in products) {
      return selectedFromState;
    }
    const saved = sessionStorage.getItem("selectedColor");
    return (saved && saved in products) ? (saved as keyof typeof products) : "Flower TOOB";

  };


  const [selectedColor, setSelectedColor] = useState<keyof typeof products>(getInitialColor);
  const [mainImage, setMainImage] = useState(products[getInitialColor()].images[0]);

  useEffect(() => {
    sessionStorage.setItem("selectedColor", selectedColor);
    setMainImage(products[selectedColor].images[0]);
  }, [selectedColor]);

  useEffect(() => {
    fetch("https://docs.google.com/spreadsheets/d/11mRmGLG9hK1NPZYufYUDjCTgnM1omU2ZC6Lm3Z5TMx4/gviz/tq?tqx=out:json")
      .then((res) => res.text())
      .then((text) => {
        const trimmed = text.trim();
        const jsonText = trimmed.substring(trimmed.indexOf('{'), trimmed.lastIndexOf('}') + 1);
        const data = JSON.parse(jsonText);

        const stock: Record<string, string> = {};

        const rows = data.table.rows.slice(1);
        for (const row of rows) {
          const name = row.c[0]?.v?.trim();
          const availability = row.c[1]?.v?.trim();
          if (name && availability) {
            stock[name] = availability;
          }
        }

        setStockData(stock);
      })
      .catch((err) => console.error("Failed to fetch or parse stock data:", err));
  }, []);


  const handleColorChange = (color: keyof typeof products) => {
    setSelectedColor(color);
    setMainImage(products[color].images[0]);
  };

  const currentProduct = products[selectedColor];

  return (
    <section className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-[#F25826]">Shop</h2>
      <br></br>

      <div className="flex flex-col md:flex-row items-center md:items-start w-full gap-8">
        <div className="flex flex-col items-center max-w-lg w-full md:w-1/2">
          <img
            className="w-full object-contain rounded-lg max-h"
            src={mainImage}
            alt=""
          />
          <br></br>
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
            {Object.entries(products).map(([color, product]) => {
              const src = product.images[0];
              return (
                <img
                  key={color}
                  className={`w-12 h-auto object-cover rounded-lg cursor-pointer 
        border ${mainImage === src ? 'border-[#F25826]' : 'border-amber-500'} 
        hover:border-[#F25826]`}
                  src={src}
                  alt={color}
                  onClick={() => {
                    setMainImage(src);
                    setSelectedColor(color as keyof typeof products);
                  }}
                />
              );
            })}

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

          <div className="text-gray-800 mb-2">
            {stockData[selectedColor] ? (
              <>Availability: {stockData[selectedColor]}</>
            ) : (
              <>Checking availability...</>
            )}
          </div>


          <div className="full-w text-center mt-10 mb-8">
            {stockData[selectedColor] && stockData[selectedColor] !== "Out of stock" ? (
              <Link
                to={currentProduct.URL}
                className="bg-[#F9EAD7] text-[#F25826] px-8 py-4 rounded font-bold mt-4 inline-block transition-colors duration-300 hover:bg-[#F25826] hover:text-white"
              >
                Buy {selectedColor} for {currentProduct.price} NZD
              </Link>
            ) : (
              <span
                className="bg-gray-300 text-gray-500 px-8 py-4 rounded font-bold mt-4 inline-block cursor-not-allowed opacity-60"
                title="Product currently unavailable"
              >
                Not available
              </span>
            )}
          </div>

        </div>
      </div>

    </section>
  );


};

export default Shop;
