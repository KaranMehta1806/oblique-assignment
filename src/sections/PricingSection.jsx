import React from 'react';

const PricingSection = () => {
  return (
    <div className="font-sans">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {duration: '3 Months', price: '$29/hr', features: ['10 hours/month', 'Weekly reports', 'Email support']},
              {duration: '6 Months', price: '$25/hr', popular: true, features: ['15 hours/month', 'Bi-weekly mentor calls', 'Priority support']},
              {duration: '12 Months', price: '$20/hr', features: ['20 hours/month', 'Weekly mentor calls', '24/7 premium support']},
            ].map((plan, index) => (
              <div key={index} className={`border rounded-lg p-6 ${plan.popular ? 'border-indigo-500 shadow-lg' : 'border-gray-200'}`}>
                {plan.popular && (
                  <div className="bg-indigo-500 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.duration}</h3>
                <p className="text-3xl font-bold mb-6">{plan.price}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-4 rounded-lg font-semibold ${plan.popular ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-800'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingSection;