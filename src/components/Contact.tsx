import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-dark-800/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-96 h-96 dot-pattern rounded-full opacity-20"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-dark-50">Contact Us</h2>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            Get in touch with our team to discuss your project requirements
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Address */}
              <div className="elevated-card p-8 rounded-2xl group hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 line-pattern opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-aqua-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-aqua-500/30 transition-all duration-300">
                    {(FaMapMarkerAlt as any)({ size: 32, className: "text-aqua-400" })}
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-dark-50 mb-3">Address</h3>
                    <p className="text-dark-300">
                      Office B44-015, Block B, SRTIP, UAE
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="elevated-card p-8 rounded-2xl group hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 line-pattern opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-aqua-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-aqua-500/30 transition-all duration-300">
                    {(FaEnvelope as any)({ size: 32, className: "text-aqua-400" })}
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-dark-50 mb-3">Email</h3>
                    <p className="text-dark-300">info@zedexel.com</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="elevated-card p-8 rounded-2xl group hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 line-pattern opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-aqua-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-aqua-500/30 transition-all duration-300">
                    {(FaPhoneAlt as any)({ size: 32, className: "text-aqua-400" })}
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-dark-50 mb-3">Phone</h3>
                    <p className="text-dark-300">+971 58 596 6095</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;