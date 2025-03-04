import * as React from "react";

interface ImageDisplayProps {
    image: string;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ image }) => {
    return (
        <div className="w-full">
            <img src={image} alt="Selected product" className="max-w-1/2 float-left mr-3 mb-2 mt-2 w-64 h-auto rounded-lg shadow-md" />
        </div>
    );
};

export default ImageDisplay;
