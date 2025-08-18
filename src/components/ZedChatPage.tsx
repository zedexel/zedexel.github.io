import React from "react";
import PricingCard from "./PricingCard";
import UpcomingFeatures from "./UpcomingFeatures";

const ZedChatPage: React.FC = () => {
  const upcomingFeatures = [
    {
      title: "Multi-Channel Support",
      description:
        "Integrate with WhatsApp, Instagram, and Facebook to provide seamless customer support across all platforms.",
      eta: "Q3 2025",
    },
    {
      title: "Multi-Language Support",
      description:
        "Communicate with your customers in Hindi, Malayalam, and Arabic, expanding your reach to diverse markets.",
      eta: "Q3 2025",
    },
    {
      title: "Advanced Analytics",
      description:
        "Get detailed insights into customer interactions, response times, and conversion rates.",
      eta: "Q4 2025",
    },
    {
      title: "Custom AI Training",
      description:
        "Train the AI with your specific business data for more accurate and personalized responses.",
      eta: "Q4 2025",
    },
  ];

  const zedchatPricingPlans = [
    {
      title: "Starter",
      price: "50 AED",
      features: [
        { text: "500 conversations" },
        { text: "Lead capture" },
        { text: "Conversation summary" },
        { text: "Basic customization" },
      ],
    },
    {
      title: "Grow",
      price: "100 AED",
      features: [
        { text: "1000 conversations" },
        { text: "Lead capture" },
        { text: "Conversation summary" },
        { text: "Basic customization" },
      ],
    },
    {
      title: "Enterprise",
      price: "Custom",
      features: [
        { text: "Unlimited conversations" },
        { text: "Advanced lead capture" },
        { text: "Full customization" },
        { text: "Priority support" },
      ],
      isEnterprise: true,
      contactInfo: {
        phone: "+971 509156095",
        email: "info@zedexel.com",
      },
    },
  ];

  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      {/* Background Elements for entire page */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-20 w-60 h-60 bg-white/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-20 w-60 h-60 bg-white/3 rounded-full blur-3xl"></div>
      </div>
      
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-12 md:pb-16 relative">

        <div className="relative z-10 container mx-auto max-w-6xl px-6">
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold aqua-glow">
                🤖 ZedChat
              </h1>
              <span className="bg-aqua-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                BETA
              </span>
            </div>
            
            <p className="text-xl md:text-2xl text-dark-200 mb-6 leading-relaxed max-w-4xl mx-auto">
              AI-powered customer support agent working{" "}
              <span className="font-semibold text-aqua-400">24/7</span>{" "}
              on your website. Captures leads, answers questions, and
              summarizes conversations directly in your inbox
            </p>

            {/* Key Features */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span className="bg-aqua-500/20 text-aqua-300 px-4 py-2 rounded-full border border-aqua-500/30 text-sm font-medium">
                ⚡ Instant Response
              </span>
              <span className="bg-aqua-500/20 text-aqua-300 px-4 py-2 rounded-full border border-aqua-500/30 text-sm font-medium">
                📧 Lead Capture
              </span>
              <span className="bg-aqua-500/20 text-aqua-300 px-4 py-2 rounded-full border border-aqua-500/30 text-sm font-medium">
                📊 Conversation Summary
              </span>
              <span className="bg-aqua-500/20 text-aqua-300 px-4 py-2 rounded-full border border-aqua-500/30 text-sm font-medium">
                🎨 Customizable
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => {
                  window.dispatchEvent(new Event("openZedChat"));
                }}
                className="aqua-button px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                🚀 Try Demo
              </button>
              
              <button
                onClick={() => {
                  document
                    .getElementById("pricing")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="aqua-border bg-transparent text-aqua-400 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-aqua-500/10 aqua-border-hover"
              >
                💰 View Pricing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-50 mb-6">
              Why Choose ZedChat?
            </h2>
            <p className="text-lg md:text-xl text-dark-300 leading-relaxed max-w-3xl mx-auto">
              Transform your customer support with intelligent automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <div className="elevated-card p-6 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-dark-50 mb-3">Instant Response</h3>
              <p className="text-dark-300 leading-relaxed">
                Respond to customer queries immediately, 24/7, without any delays.
              </p>
            </div>

            <div className="elevated-card p-6 text-center">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-dark-50 mb-3">Smart Lead Capture</h3>
              <p className="text-dark-300 leading-relaxed">
                Automatically collect visitor contact information and qualify leads.
              </p>
            </div>

            <div className="elevated-card p-6 text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-dark-50 mb-3">Conversation Insights</h3>
              <p className="text-dark-300 leading-relaxed">
                Get detailed summaries of all conversations delivered to your inbox.
              </p>
            </div>

            <div className="elevated-card p-6 text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-dark-50 mb-3">Fully Customizable</h3>
              <p className="text-dark-300 leading-relaxed">
                Match your brand colors and customize responses to fit your business.
              </p>
            </div>

            <div className="elevated-card p-6 text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-dark-50 mb-3">Secure & Private</h3>
              <p className="text-dark-300 leading-relaxed">
                Enterprise-grade security ensures your customer data stays protected.
              </p>
            </div>

            <div className="elevated-card p-6 text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-dark-50 mb-3">Mobile Optimized</h3>
              <p className="text-dark-300 leading-relaxed">
                Works perfectly on all devices, providing seamless mobile experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-50 mb-6">
              Choose Your Plan
            </h2>
            <p className="text-lg md:text-xl text-dark-300 leading-relaxed max-w-3xl mx-auto">
              Start with our affordable plans and scale as your business grows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {zedchatPricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                title={plan.title}
                price={plan.price}
                features={plan.features}
                isEnterprise={plan.isEnterprise}
                contactInfo={plan.contactInfo}
              />
            ))}
          </div>

          <UpcomingFeatures features={upcomingFeatures} />
        </div>
      </section>


    </div>
  );
};

export default ZedChatPage;
