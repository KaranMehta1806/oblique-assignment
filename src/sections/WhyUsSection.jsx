import React from 'react';

const WhyUsSection = () => {
  return (
    <div className="font-sans">
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {icon: '👨‍🏫', title: '1-on-1 Live Sessions', desc: 'Personalized attention from expert mentors'},
              {icon: '🤖', title: '24/7 AI Doubt Support', desc: 'Instant help whenever you need it'},
              {icon: '🛤️', title: 'Personalized Learning Path', desc: 'Curriculum tailored to your goals'},
              {icon: '📊', title: 'Weekly Progress Reports', desc: 'Track your improvement metrics'},
              {icon: '🎥', title: 'Session Recordings', desc: 'Revisit lessons anytime'},
              {icon: '🛠️', title: 'Industry Tools', desc: 'Learn tools used by top companies'},
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default WhyUsSection;