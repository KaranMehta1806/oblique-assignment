import React from 'react';

const HowItWorks = () => {
  return (
    <div className="font-sans">
      <section className="py-16 bg-white" >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-indigo-200 transform -translate-x-1/2"></div>
            {[
              {step: '1', title: 'Book a Free Trial', desc: 'Start with a free 30-minute session'},
              {step: '2', title: 'Choose Your Mentor', desc: 'Select from our expert instructors'},
              {step: '3', title: 'Attend Live Classes', desc: '1:1 sessions at your convenience'},
              {step: '4', title: 'Get Support', desc: '24/7 doubt resolution + recordings'},
              {step: '5', title: 'Track Progress', desc: 'Weekly reports and assessments'},
            ].map((item, index) => (
              <div key={index} className={`mb-8 md:mb-12 md:flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                <div className={`md:w-1/2 p-6 bg-gray-50 rounded-lg relative ${index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'}`}>
                  <div className="absolute -left-4 md:left-auto md:-right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
     
    </div>
  );
};

export default HowItWorks;