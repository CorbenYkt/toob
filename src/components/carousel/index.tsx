import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const images = [
    "./img/carousel/1.jpg",
    "./img/carousel/2.jpg",
    "./img/carousel/3.jpg",
    "./img/carousel/4.jpg",
    "./img/carousel/5.jpg",
];

const ImageCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);


    return (
        <Carousel>
            <CarouselContent>
                {images.map((src, index) => (
                    <CarouselItem
                        key={index}
                        className={`flex justify-center transition-opacity duration-500 ${index === currentIndex ? "opacity-100" : "opacity-0 absolute"}`}
                    >
                        <img
                            src={src}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-contain"
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>

            <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2"
                onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}
            >
                <ChevronLeft size={24} className="cursor-pointer" />
            </button>
            <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2"
                onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
            >
                <ChevronRight size={24} className="cursor-pointer" />
            </button>

            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        className={`cursor-pointer w-4 h-4 rounded-full ${idx === currentIndex ? "bg-[#F25826]" : "bg-gray-300"}`}
                        onClick={() => setCurrentIndex(idx)}
                    />
                ))}
            </div>
        </Carousel>

    );
};

export default ImageCarousel;
