import FacebookVideo from "@/components/facebookvideo";
import NewCollection from "@/components/newcollection";
import Reviews from "@/components/reviews";
import React from "react";

const Home: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto p-4">
            <div>
                <h2 className="text-3xl font-bold text-[#F25826] text-center">Watch our video</h2>
                <p className="text-center mt-2 mb-6 text-gray-700">
                    Discover how our Toob for bike seat works and why it’s the best choice for your child’s safety and comfort.
                </p>
                <FacebookVideo />
            </div>
            <NewCollection />
            <Reviews />
        </div>
    );
};

export default Home;
