import React from "react";
import ProductCard from "./ProductCard";
import PricingCard from "./PricingCard";
import UpcomingFeatures from "./UpcomingFeatures";

const Products: React.FC = () => {
  const upcomingFeatures = [
    {
      title: "Multi-Channel Support",
      description:
        "Integrate with WhatsApp, Instagram, and Facebook to provide seamless customer support across all platforms.",
      eta: "Q3 2024",
    },
    {
      title: "Multi-Language Support",
      description:
        "Communicate with your customers in Hindi, Malayalam, and Arabic, expanding your reach to diverse markets.",
      eta: "Q3 2024",
    },
    {
      title: "Advanced Analytics",
      description:
        "Get detailed insights into customer interactions, response times, and conversion rates.",
      eta: "Q4 2024",
    },
    {
      title: "Custom AI Training",
      description:
        "Train the AI with your specific business data for more accurate and personalized responses.",
      eta: "Q4 2024",
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
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our innovative solutions designed to enhance your business
            operations
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 mb-20">
          {/* ZedChat Product */}
          <ProductCard
            title="ZedChat"
            description="An AI chatbot customized to your business use case and capture leads from website visitors"
          >
            <div className="mt-8">
              <h4 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
                Pricing Plans
              </h4>
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
          </ProductCard>

          {/* Mailist Product */}
          <ProductCard
            title="MailZed"
            description="An automated email campaign software that sends bulk emails and tracks progress. Perfect for digital marketing companies running email campaigns across various industries."
            isComingSoon={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Products;
