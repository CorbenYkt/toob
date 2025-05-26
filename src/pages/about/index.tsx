import React from "react";
import ImageCarousel from "@/components/carousel";

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <p className="text-2xl font-bold  text-[#F25826]">About Us</p>

      <div className="flex flex-col md:flex-row gap-6">

        <div className="w-full max-w-80">

          <div className="w-full float-left mr-4 mb-4 mt-2 h-auto rounded-lg shadow-md">
            <ImageCarousel />
          </div>
        </div>

        <div className="md:w-1/2 w-full text-gray-800 text-justify">
          <b><p>Hello fellow bike mums and bike dads! My name is Dasha.</p></b>

          <p>My name is Dasha. I am a mum of Thomas (7) and Mila (4), and I have a huge passion for bikes.</p>

          <p>We’re a car-free family living in Wellington, and no matter the weather, we get around on our cargo bikes.</p>
        <p>
          In 2022, I created an “all-year-round”  blanket to keep my kids warm while they’re strapped into their bike seats. It’s a simple, practical, and safe design: a soft, tube-shaped blanket with no zips or buckles. You just slip it over the bike seat and pull it up around your child — much easier than layering up!</p>
        <p>We tested the first prototype (and improved!) on chilly summer mornings, frosty winter rides, and even through Wellington’s famous wind and rain. Mila loves it so much, she won’t ride without it.</p>
        <p>
          Now, I’m excited to offer custom-made <b>TOOB Blankets</b> to help other biking families keep their little precious cargo warm and cosy.</p>

        <p className="font-bold text-right  text-[#F25826]">Thank you for your support!</p>

      </div>
    </div>
    </div >
  );
};

export default About;