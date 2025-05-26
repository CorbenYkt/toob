import React, { useState } from "react";
import { Copy } from 'lucide-react';

const AskQuestion: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/xeogddoq", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
    });

    if (response.ok) {
      form.reset();
      setError("");
      setShowModal(true);
    } else {
      setError("Oops! There was a problem submitting your form.");
    }
  };

  return (
    <div className="relative max-w-md mx-auto p-6 bg-white rounded shadow text-gray-800">
      <h1 className="text-2xl font-bold mb-4 text-[#F25826]">Ask a question</h1>
      <p>If you have a custom request you could also email us directly at <a href="mailto:toob4bikeseat@gmail.com" className="font-bold hover:text-[#F25826]">toob4bikeseat@gmail.com</a></p>

      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <div>
          <label htmlFor="name" className="block mb-1 font-semibold text-gray-800">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your Name"
            className="w-full border rounded px-3 py-2 border-gray-800"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 font-semibold">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Your email address"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block mb-1 font-semibold">
            Phone (optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Your phone number"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="question" className="block mb-1 font-semibold">
            Your Question
          </label>
          <textarea
            id="question"
            name="message"
            rows={4}
            required
            placeholder="Your question"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="bg-[#F25826] text-white px-4 py-2 rounded hover:bg-[#d94a16] transition"
        >
          Submit
        </button>
      </form>

      {error && (
        <p className="mt-4 text-center text-red-600">
          {error}
        </p>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black/50
 flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 scale-100 opacity-100 max-w-sm text-center">
            <h2 className="text-xl font-bold text-green-600 mb-2">
              Thank you!
            </h2>
            <p className="text-gray-800 mb-4">
              Your question has been submitted successfully.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 bg-[#F25826] text-white rounded hover:bg-[#d94a16] transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AskQuestion;
