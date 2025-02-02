import React from "react";

const teamMembers = [
  {
    "name": "Adeeb Abdul Salam",
    "role": "Co-Founder & CEO",
    "description": "IIT Delhi Alumnus with 5+ years of experience building scalable technology platforms at companies like Tenderd (YC S18 & backed by Peter Thiel) and Rootflo (backed by Microsoft for startups)",
    "photo": "images/adeeb.jpeg",
  },
  {
    "name": "Husni Mubarack",
    "role": "Co-Founder & CTO",
    "description": "NIT Calicut Alumnus with 5+ years of experience leading tech teams at companies like Dell and Morgan Stanley.",
    "photo": "images/husni.jpg",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 min-h-screen bg-gradient-to-bl from-gray-100 to-white flex justify-center items-center text-center">
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
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h3 className="font-bold text-white">{member.name}</h3>
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