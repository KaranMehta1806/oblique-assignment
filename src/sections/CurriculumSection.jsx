import React from 'react';

const CurriculumSection = () => {
  return (
    <div className="font-sans">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What You'll Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {icon: '📌', title: 'HTML/CSS Fundamentals', desc: 'Build responsive websites from scratch'},
              {icon: '⚛️', title: 'React & Redux', desc: 'Create interactive UIs with modern React'},
              {icon: '🚀', title: 'Node.js & Express', desc: 'Build robust backend services'},
              {icon: '🗃️', title: 'MongoDB', desc: 'Work with NoSQL databases'},
              {icon: '🔐', title: 'Authentication', desc: 'Implement secure login systems'},
              {icon: '☁️', title: 'Deployment', desc: 'Deploy apps to cloud platforms'},
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
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

export default CurriculumSection;