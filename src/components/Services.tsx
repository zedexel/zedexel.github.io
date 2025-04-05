import React from "react";

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 px-6 bg-gradient-to-br from-gray-100 to-white text-center"
    >
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-5xl font-bold mb-6 text-gray-900">Our Services</h2>
        <p className="text-xl text-gray-700 leading-relaxed">
          At Zedexel, we specialize in crafting custom software solutions 
          that empower your business to thrive in a digital world. Our team of seasoned experts 
          leverages cutting-edge technologies to deliver innovative, scalable, and reliable systems 
          tailored to your unique needs. From concept to deployment, we are with you every step of the way.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {/* Service 1: AI Solutions */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <svg
            className="w-12 h-12 mx-auto mb-4 text-gray-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
            />
          </svg>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Solutions</h3>
          <p className="text-gray-700">
            Harness the power of artificial intelligence with our advanced machine learning models, 
            natural language processing, and predictive analytics. We build AI-driven tools to 
            automate processes, enhance decision-making, and unlock new opportunities.
          </p>
        </div>

        {/* Service 2: IoT Development */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <svg
            className="w-12 h-12 mx-auto mb-4 text-gray-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">IoT Development</h3>
          <p className="text-gray-700">
            Connect your physical world to the digital realm with our IoT expertise. We design and 
            implement smart systems for real-time monitoring, data collection, and automation, 
            optimized for industries like manufacturing, healthcare, and logistics.
          </p>
        </div>

        {/* Service 3: Web Applications */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <svg
            className="w-12 h-12 mx-auto mb-4 text-gray-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            />
          </svg>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Web Applications</h3>
          <p className="text-gray-700">
            Elevate your online presence with robust, responsive web applications. Our team delivers 
            fast, secure, and user-friendly platforms, from e-commerce sites to complex dashboards, 
            built with the latest frameworks and technologies.
          </p>
        </div>

        {/* Service 4: Mobile Apps */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <svg
            className="w-12 h-12 mx-auto mb-4 text-gray-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile Apps</h3>
          <p className="text-gray-700">
            Reach your audience on the go with custom mobile applications. We create native and 
            cross-platform apps for iOS and Android, designed for performance, usability, and 
            seamless integration with your existing systems.
          </p>
        </div>

        {/* Service 5: Data Solutions */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <svg
            className="w-12 h-12 mx-auto mb-4 text-gray-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="4" r="2" strokeWidth="2" />
            <circle cx="4" cy="12" r="2" strokeWidth="2" />
            <circle cx="20" cy="12" r="2" strokeWidth="2" />
            <circle cx="12" cy="20" r="2" strokeWidth="2" />
            <line x1="12" y1="6" x2="12" y2="18" strokeWidth="2" />
            <line x1="6" y1="12" x2="10" y2="12" strokeWidth="2" />
            <line x1="14" y1="12" x2="18" y2="12" strokeWidth="2" />
          </svg>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Solutions</h3>
          <p className="text-gray-700">
            Transform raw data into actionable insights with our data solutions. We offer web scraping 
            to gather critical information, big data processing for large-scale analysis, and custom 
            data pipelines to optimize your business intelligence and decision-making.
          </p>
        </div>

        {/* Service 6: ERP Solutions */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <svg
            className="w-12 h-12 mx-auto mb-4 text-gray-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">ERP Solutions</h3>
          <p className="text-gray-700">
            Streamline your operations with our ERP solutions. We develop integrated systems to 
            manage core business processes (finance, HR, supply chain, and more) delivering efficiency, 
            transparency, and real-time insights tailored to your enterprise needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;