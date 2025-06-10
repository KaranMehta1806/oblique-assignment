import React from 'react';

const TestimonialsSection = () => {
  return (
    <div className="font-sans">
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {name: 'Sarah K.', country: '🇺🇸', quote: 'This program helped me switch careers and land a job at Google within 6 months!'},
              {name: 'Raj P.', country: '🇮🇳', quote: 'The 1:1 mentorship was game-changing. I tripled my salary after completing the course.'},
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold mr-4">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-500">{item.country}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{item.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsSection;