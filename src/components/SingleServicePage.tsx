// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from 'react';
import Navbar from './Navbar';
// import * as echarts from 'echarts';

const SingleServicePage: React.FC = () => {
  const [activePlan, setActivePlan] = useState('pro');
  const [showDemo, setShowDemo] = useState(false);

  return (
    <>
     <Navbar/>
    <div className="min-h-screen bg-white font-sans">
      {/* Header Section */}

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://readdy.ai/api/search-image?query=Modern%20sleek%20software%20interface%20dashboard%20with%20clean%20design%2C%20soft%20blue%20gradient%20background%2C%20professional%20UI%20elements%2C%20minimalist%20layout%2C%20data%20visualization%2C%20high-tech%20feel%2C%20subtle%20grid%20pattern%2C%20no%20text%20visible%2C%20high%20quality%20professional%20render%2C%20perfect%20for%20tech%20company&width=1440&height=600&seq=hero1&orientation=landscape" 
            alt="Software Interface" 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simplify Your Workflow with Intelligent Interface
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              InterfaceIQ delivers a powerful yet intuitive platform that streamlines your business operations. Our AI-driven solution adapts to your needs, saving time and boosting productivity across your organization.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-200 shadow-lg text-lg cursor-pointer whitespace-nowrap !rounded-button">
                Try Free for 14 Days
              </button>
              <button 
                onClick={() => setShowDemo(!showDemo)} 
                className="bg-white text-indigo-600 border border-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors duration-200 text-lg flex items-center justify-center cursor-pointer whitespace-nowrap !rounded-button"
              >
                <i className="fas fa-play-circle mr-2"></i> Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Modal */}
      {showDemo && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-4 max-w-4xl w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Product Demo</h3>
              <button 
                onClick={() => setShowDemo(false)}
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <i className="fas fa-film text-5xl text-gray-400 mb-4"></i>
                <p className="text-gray-500">Demo video would play here</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful Features for Modern Teams</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform combines intuitive design with powerful functionality to help your team achieve more with less effort.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-bolt text-2xl text-indigo-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lightning Fast Performance</h3>
              <p className="text-gray-600">
                Experience seamless operations with our optimized platform that responds instantly to your commands.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-shield-alt text-2xl text-indigo-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enterprise-Grade Security</h3>
              <p className="text-gray-600">
                Rest easy knowing your data is protected with state-of-the-art encryption and security protocols.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-chart-line text-2xl text-indigo-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Analytics</h3>
              <p className="text-gray-600">
                Gain valuable insights with comprehensive analytics tools that help you make data-driven decisions.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-sync-alt text-2xl text-indigo-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Seamless Integration</h3>
              <p className="text-gray-600">
                Connect with your favorite tools and services through our extensive API and integration capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20software%20dashboard%20with%20data%20visualization%2C%20charts%2C%20graphs%2C%20clean%20modern%20UI%2C%20blue%20and%20white%20color%20scheme%2C%20business%20analytics%20interface%2C%20high%20quality%203D%20render%2C%20no%20text%20visible%2C%20perfect%20for%20tech%20company%20showcase&width=700&height=500&seq=showcase1&orientation=landscape" 
                alt="InterfaceIQ Dashboard" 
                className="rounded-xl shadow-2xl w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Designed for Productivity</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our intuitive interface puts everything you need at your fingertips. The clean, thoughtful design eliminates distractions and helps your team focus on what matters most.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <i className="fas fa-check-circle text-green-500 text-xl"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-medium text-gray-900">Customizable Workspace</h3>
                    <p className="mt-1 text-gray-600">Tailor the interface to match your workflow and preferences.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <i className="fas fa-check-circle text-green-500 text-xl"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-medium text-gray-900">Intelligent Automation</h3>
                    <p className="mt-1 text-gray-600">Let AI handle repetitive tasks while you focus on strategic work.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <i className="fas fa-check-circle text-green-500 text-xl"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-medium text-gray-900">Real-time Collaboration</h3>
                    <p className="mt-1 text-gray-600">Work together seamlessly with your team, no matter where they are.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your needs. All plans include a 14-day free trial with no credit card required.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <div className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${activePlan === 'basic' ? 'ring-2 ring-indigo-600 transform scale-105' : 'hover:shadow-lg'}`}>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-gray-900">$29</span>
                  <span className="text-gray-600 ml-2">/ month</span>
                </div>
                <p className="text-gray-600 mb-6">Perfect for small teams and startups.</p>
                <button 
                  onClick={() => setActivePlan('basic')}
                  className={`w-full py-3 rounded-lg font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap !rounded-button ${activePlan === 'basic' ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                >
                  {activePlan === 'basic' ? 'Selected' : 'Select Plan'}
                </button>
              </div>
              <div className="border-t border-gray-200 px-8 py-6">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span className="text-gray-600">Up to 5 team members</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span className="text-gray-600">10GB storage</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span className="text-gray-600">Basic analytics</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span className="text-gray-600">Email support</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <i className="fas fa-times mr-3"></i>
                    <span>Advanced integrations</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <i className="fas fa-times mr-3"></i>
                    <span>Custom reporting</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Pro Plan */}
            <div className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${activePlan === 'pro' ? 'ring-2 ring-indigo-600 transform scale-105' : 'hover:shadow-lg'}`}>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Pro</h3>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full">Popular</span>
                </div>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-gray-900">$79</span>
                  <span className="text-gray-600 ml-2">/ month</span>
                </div>
                <p className="text-gray-600 mb-6">Ideal for growing businesses and teams.</p>
                <button 
                  onClick={() => setActivePlan('pro')}
                  className={`w-full py-3 rounded-lg font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap !rounded-button ${activePlan === 'pro' ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                >
                  {activePlan === 'pro' ? 'Selected' : 'Select Plan'}
                </button>
              </div>
              <div className="border-t border-gray-200 px-8 py-6">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span className="text-gray-600">Up to 20 team members</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span className="text-gray-600">50GB storage</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span className="text-gray-600">Advanced analytics</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span className="text-gray-600">Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span className="text-gray-600">Advanced integrations</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <i className="fas fa-times mr-3"></i>
                    <span>Custom reporting</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Enterprise Plan */}
            <div className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${activePlan === 'enterprise' ? 'ring-2 ring-indigo-600 transform scale-105' : 'hover:shadow-lg'}`}>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-gray-900">$199</span>
                  <span className="text-gray-600 ml-2">/ month</span>
                </div>
                <p className="text-gray-600 mb-6">For large organizations with advanced needs.</p>
                <button 
                  onClick={() => setActivePlan('enterprise')}
                  className={`w-full py-3 rounded-lg font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap !rounded-button ${activePlan === 'enterprise' ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                >
                  {activePlan === 'enterprise' ? 'Selected' : 'Select Plan'}
                </button>
              </div>
              <div className="border-t border-gray-200 px-8 py-6">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span className="text-gray-600">Unlimited team members</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span className="text-gray-600">500GB storage</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span className="text-gray-600">Enterprise analytics</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span className="text-gray-600">24/7 dedicated support</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span className="text-gray-600">Advanced integrations</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span className="text-gray-600">Custom reporting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Leading Companies</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join thousands of teams that rely on InterfaceIQ to streamline their operations.
            </p>
          </div>
          
          {/* Testimonial */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto shadow-md">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="md:w-1/3 flex-shrink-0">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20corporate%20headshot%20of%20a%20female%20executive%20with%20a%20warm%20smile%2C%20business%20attire%2C%20neutral%20background%2C%20high%20quality%20portrait%20photograph%2C%20realistic%2C%20natural%20lighting&width=300&height=300&seq=testimonial1&orientation=squarish" 
                  alt="Sarah Johnson" 
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mx-auto"
                />
                <div className="text-center mt-4">
                  <h4 className="text-xl font-bold text-gray-900">Sarah Johnson</h4>
                  <p className="text-gray-600">CTO, TechVision Inc.</p>
                </div>
              </div>
              <div className="md:w-2/3">
                <i className="fas fa-quote-left text-4xl text-indigo-200 mb-4"></i>
                <p className="text-lg text-gray-700 mb-6">
                  "InterfaceIQ has transformed how our team collaborates and manages projects. The intuitive design made adoption seamless, and we've seen a 40% increase in productivity since implementation. The customer support team has been exceptional, always responsive and helpful."
                </p>
                <div className="flex justify-center md:justify-start">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <i key={star} className="fas fa-star text-yellow-400 mr-1"></i>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats and Partner Logos */}
          <div className="mt-20">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">10,000+</div>
                <p className="text-gray-600">Active Users</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">98%</div>
                <p className="text-gray-600">Customer Satisfaction</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">40%</div>
                <p className="text-gray-600">Productivity Increase</p>
              </div>
            </div>
            
            <div className="bg-white py-8 rounded-xl">
              <h3 className="text-center text-gray-500 mb-8 text-sm uppercase tracking-wider font-medium">Trusted by innovative companies</h3>
              <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
                <div className="flex items-center text-gray-400 text-2xl">
                  <i className="fab fa-google mr-2"></i>
                  <span className="font-medium">Google</span>
                </div>
                <div className="flex items-center text-gray-400 text-2xl">
                  <i className="fab fa-microsoft mr-2"></i>
                  <span className="font-medium">Microsoft</span>
                </div>
                <div className="flex items-center text-gray-400 text-2xl">
                  <i className="fab fa-amazon mr-2"></i>
                  <span className="font-medium">Amazon</span>
                </div>
                <div className="flex items-center text-gray-400 text-2xl">
                  <i className="fab fa-spotify mr-2"></i>
                  <span className="font-medium">Spotify</span>
                </div>
                <div className="flex items-center text-gray-400 text-2xl">
                  <i className="fab fa-slack mr-2"></i>
                  <span className="font-medium">Slack</span>
                </div>
              </div>
            </div>
          </div>
          
          
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-indigo-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Workflow?</h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have streamlined their operations with InterfaceIQ.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 shadow-lg text-lg cursor-pointer whitespace-nowrap !rounded-button">
              Start Your Free Trial
            </button>
            <button className="bg-transparent text-white border border-white px-8 py-4 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-200 text-lg cursor-pointer whitespace-nowrap !rounded-button">
              Schedule a Demo
            </button>
          </div>
          <p className="text-indigo-200 mt-6">No credit card required. 14-day free trial.</p>
        </div>
      </section>

    </div>
    
    </>
  );
};

export default SingleServicePage;

