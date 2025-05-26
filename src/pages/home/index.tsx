import FacebookVideo from "@/components/facebookvideo";
import CollageCollection from "@/components/collagecollection";
import Reviews from "@/components/reviews";
import React from "react";

const Home: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto p-4">
            <CollageCollection />
            <FacebookVideo />
            <Reviews />
        </div>
    );
};

export default Home;
