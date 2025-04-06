import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-800 text-white text-center">
      <h2 className="text-3xl font-bold mb-10">Contact Us</h2>

      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-start justify-between gap-12">
        {/* Left: Contact Info */}
        <div className="lg:w-2/3 w-full">
          <div className="flex flex-col space-y-10 text-left">
            {/* Address */}
            <div className="flex items-center">
              <div className="mr-6 text-gray-500 text-3xl">
                {(FaMapMarkerAlt as any)({ size: 32 })}
              </div>
              <div>
                <h3 className="text-lg font-semibold">Our Address</h3>
                <p className="text-base text-gray-300">
                  Office B44-015, Block B, SRTIP, UAE
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center">
              <div className="mr-6 text-gray-500 text-2xl">
                {(FaEnvelope as any)({ size: 32 })}
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-base text-gray-300">info@zedexel.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center">
              <div className="mr-6 text-gray-500 text-2xl">
                {(FaPhoneAlt as any)({ size: 32 })}
              </div>
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-base text-gray-300">+971 58 596 6095</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="lg:w-1/3 w-full">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;