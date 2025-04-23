import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Define the type for a single testimonial
interface TestimonialType {
  text: string;
  name: string;
  role: string;
}

// Define the testimonial data
const testimonials: TestimonialType[] = [
  {
    text: "Our company's productivity increased by 45% after implementing this solution. The customer support team was incredibly helpful throughout the entire onboarding process.",
    name: 'LINDA LARSON',
    role: 'Founder, XYZ',
  },
  {
    text: "The platform's intuitive design made it easy for our entire team to adapt quickly. We've seen remarkable improvements in our workflow efficiency since day one.",
    name: 'PAUL SCAVO',
    role: 'Founder, XYZ',
  },
  {
    text: "What impressed me most was the attention to detail. Every feature has been thoughtfully designed to enhance user experience while maintaining simplicity and elegance.",
    name: 'NICK CAVE',
    role: 'Founder, XYZ',
  },
  {
    text: "Our company's productivity increased by 45% after implementing this solution. The customer support team was incredibly helpful throughout the entire onboarding process.",
    name: 'LINDA LARSON',
    role: 'Founder, XYZ',
  },
  {
    text: "The platform's intuitive design made it easy for our entire team to adapt quickly. We've seen remarkable improvements in our workflow efficiency since day one.",
    name: 'PAUL SCAVO',
    role: 'Founder, XYZ',
  },
  {
    text: "What impressed me most was the attention to detail. Every feature has been thoughtfully designed to enhance user experience while maintaining simplicity and elegance.",
    name: 'NICK CAVE',
    role: 'Founder, XYZ',
  },
];

const Testimonial: React.FC = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    appendDots: (dots: React.ReactNode) => (
        <div className="slick-dots-container flex justify-center relative bottom-8">
          <ul>{dots}</ul>
        </div>
      ),
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-16 px-4" id='testimonials'>
      <div className="w-full max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            What People Say
          </h1>
        </div>

        {/* Slider (Centered Content) */}
        <div className="flex justify-center">
          <div className="w-full max-w-6xl">
            <Slider {...settings}>
              {testimonials.map((t, index) => (
                <div key={index}>
                  <div className="flex flex-col items-center text-center">
                    <div className="font-quote text-9xl h-20 text-gray-300 text-right">"</div>
                    <p className="text-gray-500 text-center mb-6">{t.text}</p>
                    <div className="mx-auto">
                      <h3 className="font-bold text-gray-900 text-center">{t.name}</h3>
                      <p className="text-gray-500 text-sm text-center">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
