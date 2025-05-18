import React, { useState } from "react";
import { Link } from "react-router-dom";

const faqData = [
  {
    question: "Are all these blankets handmade?",
    answer: "Yes, TOOB blankets are handmade by me (Dasha) in my cute sewing room in Wellington, Aotearoa, New Zealand."
  },
  {
    question: "Are there any different sizes of TOOBs?",
    answer: "There is only one size (approx 57X84cm) which fits most rear-mounted child seats."
  },
  {
    question: "How do I wash TOOBs?",
    answer: "For best care, use a gentle cycle with cold water and a mild detergent. Avoid fabric softeners and high heat. To revive fluffiness of fleece, place the blanket in the dryer in a low heat and a slow spin for a short period of time."
  },
  {
    question: "How can I attach TOOB if there is no handle on a bike seat?",
    answer: "We can make a customised strap. Please send your custom request to our email: …."
  },
  {
    question: "What are shipping terms and conditions?",
    answer: (
      <>
        <p>We ship and process orders within 3-5 working days. The price on each page is for blankets only and shipping will be added at the checkout.</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Shipping Charges: We charge a flat rate of $7 urban or $12 rural</li>
          <li>Free Pick-Up: Customers have the option to pick up their orders free of charge from my home. We will contact you to arrange this upon order confirmation.</li>
          <li>Transit time: The estimated transit time for orders depends on the destination and the shipping services delivery schedule.</li>
          <li>Address accuracy: It is the customer’s responsibility to provide accurate and complete shipping information</li>
        </ul>
      </>
    )
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md text-gray-800">
      <h2 className="text-3xl font-bold text-[#F25826] mb-6">FAQ</h2>
      <p className="mb-4">Here are some most frequently asked questions. If you didn’t find the answer you were looking for, feel free to <Link
        to="/askquestion"
        className="hover:text-[#F25826] font-bold text-gray-800"
      > ask us your question!
      </Link>
      </p>

      <div className="space-y-4 text-gray-800">
        {faqData.map(({ question, answer }, index) => (
          <div key={index} className="border border-gray-200 rounded-md ">
            <button
              onClick={() => toggleIndex(index)}
              className="w-full text-left px-4 py-3 flex justify-between items-center focus:outline-none focus-visible:ring focus-visible:ring-orange-400 "
            >
              <span className="font-semibold text-gray-800">{question}</span>
              <svg
                className={`w-5 h-5 text-[#F25826] transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : "rotate-0"}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 text-gray-800 border-t border-gray-200">
                {typeof answer === "string" ? <p>{answer}</p> : answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
