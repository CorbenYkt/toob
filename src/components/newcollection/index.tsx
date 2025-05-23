import React from "react";
import { useNavigate } from "react-router-dom";
import products from "@/data/products";

const NewCollection: React.FC = () => {
    const navigate = useNavigate();
    const firstFourProducts = Object.entries(products).slice(0, 4);

    const handleProductClick = (productName: string) => {
        sessionStorage.setItem("selectedColor", productName);
        navigate("/productselection");
    };

    return (
        <section className="max-w-7xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-[#F25826] mb-8 text-center">
                New Collection
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {firstFourProducts.map(([name, product], index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg p-4 shadow-md border border-gray-200 flex flex-col items-center"
                    >
                        <img
                            src={product.images[0]}
                            alt={name}
                            className="w-full h-64 object-cover mb-4 rounded"
                        />
                        <button
                            onClick={() => handleProductClick(name)}
                            className="font-semibold text-lg text-center text-[#F25826] hover:cursor-pointer"
                        >
                            {name}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default NewCollection;
