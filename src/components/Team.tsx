import { FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    name: "Adeeb Abdul Salam",
    role: "Co-Founder & CEO",
    description: "IIT Delhi Alumnus with 5+ years of experience building scalable technology platforms at companies like Tenderd (YC S18 & backed by Saudi Aramco) and Rootflo (backed by Microsoft for startups)",
    photo: "images/adeeb.jpeg",
    linkedin: "https://www.linkedin.com/in/adeebabdulsalam",
  },
  {
    name: "Husni Mubarack",
    role: "Co-Founder & CTO",
    description: "NIT Calicut Alumnus with 5+ years of experience leading tech teams at companies like Dell and Morgan Stanley.",
    photo: "images/husni.jpg",
    linkedin: "https://www.linkedin.com/in/husni-mubarack-4bb919144",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-12 md:py-24 bg-dark-900/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 md:w-64 h-32 md:h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-32 md:w-64 h-32 md:h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full line-pattern opacity-15"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-dark-50">Meet Our Founders</h2>
          <p className="text-dark-300 text-base md:text-lg max-w-2xl mx-auto px-4">
            Led by experienced technology leaders with proven track records at top-tier companies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="elevated-card p-6 md:p-10 rounded-2xl flex flex-col items-center text-center group hover:scale-105 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 geometric-pattern opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative z-10">
                {/* Profile Icon - Top on mobile, left on desktop */}
                <div className="relative mb-6 md:mb-0 md:mr-8 md:float-left flex justify-center md:justify-start">
                  <div className="relative">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-24 md:w-32 lg:w-40 h-24 md:h-32 lg:h-40 rounded-full object-cover border-4 border-aqua-500/40 shadow-2xl group-hover:border-aqua-500/60 transition-all duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-white/10">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-dark-100 transition-colors duration-300"
                      >
                        {(FaLinkedin as any)({ size: 14, className: "md:w-4 md:h-4 lg:w-5 lg:h-5" })}
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Content - Below icon on mobile, to the right on desktop */}
                <div className="text-center md:text-left md:overflow-hidden">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-dark-50 mb-2 md:mb-3 group-hover:aqua-glow transition-all duration-300">{member.name}</h3>
                  <p className="text-aqua-400 font-semibold mb-3 md:mb-4 text-sm md:text-base">{member.role}</p>
                  <p className="text-dark-300 leading-relaxed text-xs md:text-sm lg:text-base">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;