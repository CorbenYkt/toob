import React, { useState } from "react";

const faqData = [
  
  {
    question: "Are all TOOB blankets handmade?",
    answer: "Yes! Each TOOB blanket is handmade by me (Dasha) with love and care in my sewing room in Wellington, Aotearoa New Zealand."
  },
  {
    question: "Are there different sizes of TOOBs??",
    answer: "TOOBs come in one size (approximately 57 x 84 cm), designed to fit most rear-mounted child bike seats."
  },
  {
    question: "How do I wash a TOOB?",
    answer: "For best results, wash on a gentle cycle using cold water and mild detergent. Avoid fabric softeners and high heat. To fluff up the fleece, pop the blanket in the dryer on low heat and slow spin for a short time."
  },
  {
    question: "What if my bike seat doesn’t have a handle to secure the TOOB?",
    answer: (
      <>
        No problem! We can make a custom strap for you. Please email your request to{' '}
        <a href="mailto:toob4bikeseat@gmail.com" className="font-bold hover:text-[#F25826]">
          toob4bikeseat@gmail.com
        </a>
      </>
    )

  },
  {
    question: "What are shipping terms and conditions?",
    answer: (
      <>
        <p><b>Processing Time:</b></p>
        <p>
          Orders are processed and shipped within 3–5 working days.
        </p>
        <p className="mt-4"><b>Shipping Costs:</b></p>
        <ul className="list-disc list-inside space-y-1">
          <li>$10 flat rate (urban)</li>
          <li>$12 flat rate (rural)</li>
          <li>$40 shipping to Australia</li>
        </ul>
        <p className="mt-4"><b>Free Pick-Up:</b></p>
        <p>Pick-up is available from my home in Wellington at no extra cost. We'll be in touch after your order to arrange a convenient time.</p>
        <p className="mt-4"><b>Transit Time:</b></p>
        <p>Delivery times vary depending on your location and the courier’s schedule.</p>
        <p className="mt-4"><b>Address Accuracy:</b></p>
        <p>Please double-check your shipping address during checkout. We are not responsible for delays or issues due to incorrect or incomplete information</p>
      </>
    )
  },
  {
    question: "How can I order more than one TOOB with different prints and get them shipped together?",
    answer: (
      <>
        <p>If you'd like to purchase more than one TOOB with different prints, please note that our checkout system currently has limitations when processing multiple prints in a single order. To work around this, please place two separate orders:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>For the first order, select your preferred shipping method.
          </li>
          <li>For the second order, choose the Free Pick-Up option.
          </li>
        </ul>
        <p className="mt-4">We will then combine both orders into one parcel for shipping.</p>
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
      <h2 className="text-3xl font-bold text-[#F25826] mb-6">Frequently Asked Questions</h2>
      <p className="mb-4">Here are some most frequently asked questions.
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
