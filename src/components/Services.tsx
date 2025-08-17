import ServiceCard from "./ServiceCard";
import { 
  AiOutlineAppstore,
  AiOutlineMobile,
  AiOutlineRobot,
  AiOutlineCloudServer,
  AiOutlineGlobal,
  AiOutlineCluster 
} from "react-icons/ai";

const Services = () => {
  return (
    <section
      id="services"
      className="pt-12 md:pt-24 pb-8 px-6 bg-dark-900/50 text-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 md:w-64 h-32 md:h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 md:w-64 h-32 md:h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full line-pattern opacity-20"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto mb-12 md:mb-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-dark-50">Our Services</h2>
        <p className="text-base md:text-xl text-dark-300 leading-relaxed font-medium max-w-4xl mx-auto px-4">
          At Zedexel, we build custom software solutions that make your business AI-ready and future-proof. 
          Our team of seasoned experts leverages cutting-edge technologies to deliver innovative, scalable and reliable systems 
          tailored to your unique needs. From concept to deployment, we are with you every step of the way
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
        <ServiceCard
          icon={AiOutlineRobot} // no angle brackets here
          title="AI Solutions"
          description="Harness the power of artificial intelligence through natural language processing, 
            predictive analytics, and smart automation. We build AI-powered tools that streamline 
            operations, support better decision-making, and uncover new growth opportunities."
        />
        <ServiceCard
          icon={AiOutlineCloudServer}
          title="IoT Development"
          description="Connect your physical world to the digital realm with our IoT expertise. We design and 
            implement smart systems for real-time monitoring, data collection, and automation, 
            optimized for industries like manufacturing, healthcare, and logistics."
        />
        <ServiceCard
          icon={AiOutlineAppstore}
          title="Web Applications"
          description="Elevate your online presence with robust, responsive web applications. Our team delivers 
            fast, secure, and user-friendly platforms, from e-commerce sites to complex dashboards, 
            built with the latest frameworks and technologies."
        />
        <ServiceCard
          icon={AiOutlineMobile}
          title="Mobile Apps"
          description="Reach your audience on the go with custom mobile applications. We create native and 
            cross-platform apps for iOS and Android, designed for performance, usability, and 
            seamless integration with your existing systems."
        />
        <ServiceCard
          icon={AiOutlineGlobal}
          title="Data Solutions"
          description="Transform raw data into actionable insights with our data solutions. We offer web scraping 
            to gather critical information, big data processing for large-scale analysis, and custom 
            data pipelines to optimize your business intelligence and decision-making."
        />
        <ServiceCard
          icon={AiOutlineCluster}
          title="ERP Solutions"
          description="Streamline your operations with our ERP solutions. We develop integrated systems to 
            manage core business processes (finance, HR, supply chain, and more) delivering efficiency, 
            transparency, and real-time insights tailored to your enterprise needs."
        />
      </div>
    </section>
  );
};

export default Services;