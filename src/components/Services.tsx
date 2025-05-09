import Clients from "./Clients";
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
      className="py-20 px-6 bg-gradient-to-br from-gray-100 to-white text-center"
    >
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-5xl font-bold mb-6 text-gray-900">Our Services</h2>
        <p className="text-xl text-gray-700 leading-relaxed font-medium">
          At Zedexel, we specialize in crafting custom software solutions 
          that empower your business to thrive in a digital world. Our team of seasoned experts 
          leverages cutting-edge technologies to deliver innovative, scalable, and reliable systems 
          tailored to your unique needs. From concept to deployment, we are with you every step of the way.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
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

      <Clients />
    </section>
  );
};

export default Services;