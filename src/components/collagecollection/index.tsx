import React from "react";
import { useNavigate } from "react-router-dom";
import products from "@/data/products";

const CollageCollection: React.FC = () => {
  const navigate = useNavigate();
  const allImages: { src: string; name: string }[] = [];

  Object.entries(products).forEach(([name, product]) => {
    product.images.forEach((src) => {
      allImages.push({ src, name });
    });
  });

  const collageImages = allImages.slice(0, 9);

  const gridAreas = [
    "img1", "img2", "img3",
    "img4", "logo", "img5",
    "img6", "img7", "img8",
  ];

  return (
    <div className="max-w-screen-md mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-[#F25826] mb-6 text-center">
        New Collection
      </h1>

      <div
        className="grid gap-1"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateAreas: `
            "img1 img2 img3"
            "img4 logo img5"
            "img6 img7 img8"
          `,
        }}
      >
        {gridAreas.map((area, idx) => {
          if (area === "logo") {
            return (
              <div
                key="logo"
                style={{ gridArea: "logo" }}
                className="flex items-center justify-center bg-white rounded shadow"
              >
                <img
                  src="img/logo.png"
                  alt="Logo"
                  className="max-w-[60%] max-h-[60%] object-contain"
                />
              </div>
            );
          }

          const image = collageImages[idx];
          if (!image) return null;

          return (
            <div
              key={image.src}
              style={{ gridArea: area }}
              className="relative cursor-pointer overflow-hidden rounded shadow group"
              onClick={() => navigate("/productselection", { state: { selected: image.name } })}
            >
              <div className="w-full h-full">
                <img
                  src={image.src}
                  alt={image.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white text-center text-xs py-0.5 group-hover:bg-black/60 transition">
                {image.name}
              </div> */}
            </div>
          );
        })}
      </div>
      <br></br>
    </div>
  );
};

export default CollageCollection;
