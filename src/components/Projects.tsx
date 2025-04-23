import { useState } from "react";

interface ProjectData {
  image: string;
  title: string;
  description: string;
  technologies: string;
  link: string;
  site: string;
  category: string[];
}

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const categories = ["All", "AI Solutions", "IoT Development", "Web Application", "Mobile Apps", "Data Solutions", "ERP Solutions"];

  const projects: ProjectData[] = [
    {
      image: "https://placehold.co/400",
      title: "Project 1",
      description: "Project is in Progress",
      technologies: "AI Solutions, IoT Development",
      link: "https://asdfasdf/",
      site: "https://asdfsadf",
      category: ["AI Solutions", "IoT Development"],
    },
    {
      image: "https://placehold.co/400",
      title: "Project 2",
      description: "Project is in Progress",
      technologies: "Web Application",
      link: "https://asdfasdf",
      site: "https://asdfasdfsadf",
      category: [ "Web Application"],
    },
    {
      image: "https://placehold.co/400",
      title: "Project 3",
      description: "Project is in Progress",
      technologies: "Mobile Apps",
      link: "https://care4u-dental.vercel.app/",
      site: "https://care4u-dental.vercel.app/",
      category: ["Mobile Apps"],
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => {
          if (selectedCategory === "HTML & CSS") {
            return (
              project.category.includes("HTML") &&
              project.category.includes("CSS")
            );
          }
          return project.category.includes(selectedCategory);
        });

  return (
    <div className="container mx-auto px-4 mt-20" id="Project">
      {/* Categories Menu */}
      <div className="flex justify-center flex-wrap gap-4 mb-8 p-2">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-5 py-2 text-base font-bold rounded-lg cursor-pointer shadow-md transition-all duration-300 
              ${
                selectedCategory === category
                  ? "bg-gray-800 text-white"
                  : "bg-gray-100 hover:bg-gray-800 hover:text-white"
              }`}
            onClick={() => setSelectedCategory(category)}
            onMouseEnter={() => setHoveredCategory(category)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="relative flex flex-col items-start rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
            data-aos="fade-up"
          >
            {/* Project Image */}
            <div className="relative w-full h-[200px] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-30"
              />
              
            </div>

            {/* Project Info */}
            <div className="p-5 text-left flex flex-col items-start bg-white  w-full">
              <h2 className="mb-2 text-2xl font-semibold text-gray-800 ">
                {project.title}
              </h2>
              <p className="mb-2 text-sm leading-relaxed text-gray-500">
                {project.description}
              </p>
              <p className="mb-2 text-sm text-gray-500">
                <strong>Technologies:</strong> {project.technologies}
              </p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 border border-black px-5 py-2 rounded-md font-medium shadow-md transition-all duration-300 hover:bg-gray-700 hover:text-white"
              >
                View
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
