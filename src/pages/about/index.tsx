import React from "react";
import ImageCarousel from "@/components/carousel";

const About: React.FC = () => {
    return (
        <div className="max-w-3xl mx-auto p-4">
            <p className="text-2xl font-bold">About</p><br></br>
            <div className="max-w-1/2 float-left mr-3 mb-2 mt-2 w-64 h-auto rounded-lg shadow-md">
                <ImageCarousel />
            </div>

            <p className="text-gray-800 text-justify">
                Hello fellow bike mums and bike dads! My name is Dasha. I am mum of Thomas (7) and Mila (4), and I have a huge passion for bikes.
                <br /><br />
                We are a car-free family. Both mum and dad transport the kids around on cargo bikes, regardless of the weather here in Wellington.
                <br /><br />
                Three years ago, I decided to make an “all year around” blanket to keep my kids warm when they are strapped in to their bike seats. The design is very simple, safe and practical. The blanket is tube-shaped: there are no zips or buckles, it just slips over the bike seat and can be pulled up around the child. It’s much easier than putting on extra layers! The prototype was tested extensively and refined over many chilly summer mornings and evenings, cold winter days and occasional showers. Mila loves this soft blanket so much that she refuses to ride without it.
            </p>
            <p>
                I am now offering custom-made TOOB blankets to order, to help other mums and dads keep their little precious cargo warm.</p><br /><br />
            <p className="font-bold text-right">
                Thank you for your support!</p>
        </div >
    );
};

export default About;
