import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-12 md:py-24 bg-dark-800/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 md:w-64 h-32 md:h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 md:w-64 h-32 md:h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-48 md:w-96 h-48 md:h-96 dot-pattern rounded-full opacity-20"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-dark-50">Contact Us</h2>
          <p className="text-dark-300 text-base md:text-lg max-w-2xl mx-auto px-4">
            Ready to transform your business? Let's talk
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Address */}
              <div className="elevated-card p-6 md:p-8 rounded-2xl group hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 line-pattern opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 md:w-20 h-16 md:h-20 bg-aqua-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:bg-aqua-500/30 transition-all duration-300">
                    {(FaMapMarkerAlt as any)({ size: 24, className: "md:text-3xl text-aqua-400" })}
                  </div>
                  <div className="text-center">
                    <p className="text-dark-300 text-sm md:text-base">
                      Office B44-015, Block B, SRTIP, UAE
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="elevated-card p-6 md:p-8 rounded-2xl group hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 line-pattern opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 md:w-20 h-16 md:h-20 bg-aqua-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:bg-aqua-500/30 transition-all duration-300">
                    {(FaEnvelope as any)({ size: 24, className: "md:text-3xl text-aqua-400" })}
                  </div>
                  <div className="text-center">
                    <p className="text-dark-300 text-sm md:text-base">info@zedexel.com</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="elevated-card p-6 md:p-8 rounded-2xl group hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 line-pattern opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 md:w-20 h-16 md:h-20 bg-aqua-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:bg-aqua-500/30 transition-all duration-300">
                    {(FaPhoneAlt as any)({ size: 24, className: "md:text-3xl text-aqua-400" })}
                  </div>
                  <div className="text-center">
                    <p className="text-dark-300 text-sm md:text-base">+971 58 596 6095</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Button */}
        <div className="text-center mt-12 md:mt-16">
          <a
            href="https://wa.me/971509156095?text=Hello%20I%20am%20interested%20in%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-aqua-500/20 hover:bg-aqua-500/30 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-aqua-500/30"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="w-5 md:w-6 h-5 md:h-6 mr-2 md:mr-3"
            />
            WhatsApp Us Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;