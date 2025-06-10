import React from 'react';

const CallToAction = () => {
  return (
    <div className="font-sans">
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg py-3 px-4 md:px-8 z-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-2 md:mb-0">
            <h3 className="font-semibold">Ready to start your coding journey?</h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg cursor-pointer" >
              Talk to a Counsellor
            </button>
            <button className="bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold py-2 px-4 rounded-lg cursor-pointer">
              Book a Free Trial
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg cursor-pointer">
              Chat with AI Mentor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;