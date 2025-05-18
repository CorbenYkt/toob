import React from "react";

const reviews = [

    {
        text: "Our 2 year old loves her orange TOOB. She is incredibly comfortable as we cycle around Wellington, even on windy and rainy days! Dasha has been great to communicate with, responded quickly and even made a customized adjustment to our TOOB because our back seat was slightly different. I'd recommend a TOOB to everyone cycling around Wellington!",
        author: "Carolien Vis",
    },
    {
        text: "We just ordered a TOOB for our nearly 2 year old. Dasha was awesome to work with - we messaged her on Friday and it was ready for collection by Monday. Can’t wait to give it to our little dude for his birthday. The TOOB feels so lush! He’ll be cosy warm as he zooms around Evans Bay with his dad on the way to daycare!❤️",
        author: "Maddie Caldar",
    },
    {
        text: "My 3 year old loves this! Snug and warm on even the windiest Wellington day. The quality and finish is excellent and clearly made to last. Strongly recommend.",
        author: "Yeji Jang-Jones",
    },
    {
        text: "Excellent blanket for my 2 year old -- keeps him warm on windy Wellington days. Very well made",
        author: "Parth Sheth",
    }
];

const CustomerReviews: React.FC = () => {
    return (
        <section className="max-w-7xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-[#F25826] mb-8 text-center">
                Customer Reviews
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {reviews.map(({ text, author }, index) => (
                    <blockquote
                        key={index}
                        className="bg-white rounded-lg p-6 shadow-md border border-gray-200 flex flex-col justify-between"
                    >
                        <p className="text-gray-800 italic mb-4">“{text}”</p>
                        <footer className="text-right font-semibold text-[#F25826]">
                            — {author}
                        </footer>
                    </blockquote>
                ))}
            </div>
        </section>
    );
};

export default CustomerReviews;
