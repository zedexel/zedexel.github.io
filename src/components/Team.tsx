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
    <section id="team" className="py-24 bg-dark-900/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-dark-50">Meet Our Founders</h2>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            The brilliant minds behind Zedexel, driving innovation and excellence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="card p-10 rounded-2xl flex flex-col items-center text-center group hover:scale-105 transition-all duration-500"
            >
              <div className="relative mb-8">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-40 h-40 rounded-full object-cover border-4 border-primary-500/30 shadow-2xl group-hover:border-primary-400/50 transition-all duration-300"
                />
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary-200 transition-colors duration-300"
                  >
                    {(FaLinkedin as any)({ size: 20 })}
                  </a>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-dark-50 mb-3 group-hover:text-primary-400 transition-colors duration-300">{member.name}</h3>
              <p className="text-primary-400 font-semibold mb-4">{member.role}</p>
              <p className="text-dark-300 leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;