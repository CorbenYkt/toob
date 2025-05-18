import React from "react";
import ImageCarousel from "@/components/carousel";

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <p className="text-2xl font-bold  text-[#F25826]">About</p>

      <div className="flex flex-col md:flex-row gap-6">

        <div className="w-full max-w-80">

          <div className="w-full float-left mr-4 mb-4 mt-2 h-auto rounded-lg shadow-md">
            <ImageCarousel />
          </div>
        </div>

        <div className="md:w-1/2 w-full text-gray-800 text-justify">
          <p>
            Hello fellow bike mums and bike dads! My name is Dasha.</p>
          <p>I am mum of Thomas (7) and Mila (4), and I have a huge passion for bikes.</p>
          <p>
            We are a car-free family. Both mum and dad transport the kids around on cargo bikes, regardless of the weather here in Wellington.
          </p>
          <p>
            In 2022 I decided to make an “all year around” blanket to keep my kids warm when they are strapped into their bike seats. The design is very simple, safe and practical. The blanket is tube-shaped: there are no zips or buckles, it just slips over the bike seat and can be pulled up around the child. It’s much easier than putting on extra layers! The prototype was tested extensively and refined over many chilly summer mornings and evenings, cold winter days and occasional showers. Mila loves this soft blanket so much that she refuses to ride without it.
          </p>
          <p>
            I am now offering custom-made TOOB blankets to order, to help other mums and dads keep their little precious cargo warm.
          </p>
          <p className="font-bold text-right  text-[#F25826]">Thank you for your support!</p>

        </div>
      </div>
    </div >
  );
};

export default About;