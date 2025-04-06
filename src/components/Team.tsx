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
    <section id="team" className="py-20 bg-gradient-to-bl from-gray-100 to-white flex justify-center items-center text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-12 text-gray-900">Meet Our Founders</h2>
        <div className="grid md:grid-cols-2 gap-14">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-md shadow-slate-400 flex flex-col items-center text-center bg-gradient-to-t from-slate-700 to-gray-600"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-white shadow-md"
              />
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-white">{member.name}</h3>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  {(FaLinkedin as any)({ size: 15 })}
                </a>
              </div>
              <p className="text-neutral-200 mt-1">{member.role}</p>
              <p className="text-white mt-2 text-sm font-thin">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;