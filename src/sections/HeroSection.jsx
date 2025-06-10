import React, { useState } from "react";

import Modal from "../components/Modal";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="font-sans">
      
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 md:py-24">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Become a Full-Stack Developer in 12 Weeks
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Master MERN stack with personalized 1:1 mentorship and real-world
              projects.
            </p>
            <button
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              Book a Free Trial
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src="/assets/images/codingimg.jpg"
              alt="Coding illustration"
              className="rounded-lg shadow-xl w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <h2 className="text-2xl font-bold mb-4">Book Your Free Trial</h2>
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Data Submitted");
            }}
          >
            <input
              required
              type="text"
              placeholder="Full Name"
              className="border rounded px-3 py-2"
            />
            <input
              required
              type="email"
              placeholder="Email Address"
              className="border rounded px-3 py-2"
            />
            <input
              required
              id="phone"
              type="tel"
              placeholder="+91 123-456-7890"
              className="border rounded px-3 py-2"
            />

            <textarea
              required
              rows={4}
              placeholder="Description"
              className="border rounded px-3 py-2"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
            >
              Submit
            </button>
          </form>
        </Modal>
      </section>
    </div>
  );
};

export default HeroSection;
