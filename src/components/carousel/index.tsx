import * as React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const images = ["./img/img1.jpg", "./img/img2.jpg"];

const ImageCarousel: React.FC = () => {

    const [currentIndex, setCurrentIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Carousel>
            <CarouselContent>
                {images.map((src, index) => (
                    <CarouselItem
                        key={index}
                        className={`flex justify-center transition-opacity duration-500 ${index === currentIndex ? "opacity-100" : "opacity-0 absolute"
                            }`}
                    >
                        <img
                            src={src}
                            alt={`Slide ${index}`}
                            className="h-auto rounded-lg shadow-md"
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}

export default ImageCarousel;
