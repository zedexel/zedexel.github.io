import { IconType } from "react-icons";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <Link to='/single' className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="w-12 h-12 mx-auto mb-4 text-gray-900">
        {(Icon as any)({ size: 48 })}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </Link>
  );
};

export default ServiceCard;