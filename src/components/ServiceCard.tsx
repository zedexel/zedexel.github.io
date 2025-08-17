import { IconType } from "react-icons";

interface ServiceCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="elevated-card p-8 hover:scale-105 transition-all duration-300 group relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
      <div className="relative z-10">
        <div className="w-16 h-16 mx-auto mb-6 text-white group-hover:text-aqua-400 transition-colors duration-300">
          {(Icon as any)({ size: 64 })}
        </div>
        <h3 className="text-2xl font-bold text-dark-50 mb-4 group-hover:aqua-glow transition-all duration-300">{title}</h3>
        <p className="text-dark-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;