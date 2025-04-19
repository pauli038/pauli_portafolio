
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Auth Identity Server",
    description: "I worked as a backend developer, responsible for implementing the full authentication and registration system. The web app was developed using C# and .NET following Clean Architecture principles. It is integrated with Identity Server for centralized authentication across multiple projects. The system also includes employee CRUD, role-based access control, and SQL Server integration via Entity Framework.",
    image: "https://www.safepaas.com/wp-content/uploads/2021/11/IDM-Blog-1024x576.png",
    technologies: ["C#", ".NET", "Entity Framework", "SQL Server","Clean Architecture"],
    github: "https://github.com/dian7875/Auth_Identity_Server.git",
    
  },
  {
    title: "Migraine-Analysis",
    description: "This project consists of the development of an interactive dashboard in Power BI, based on a clinical dataset of 400 patients suffering from different types of migraines. The objective is to identify relevant patterns in symptoms, migraine types, and patients’ demographic characteristics to support medical analysis and decision-making.",
    image: "migraine.png",
    technologies: ["Power BI", "Microsoft Excel", "Visualizaciones avanzadas" ,"Dataset"],
    github: "https://github.com/pauli038/Migraine-Analysis.git",
  
  },
  {
    title: "Hogar de Libros",
    description: "Hogar de Libros is a digital system that streamlines and modernizes the operations of the Felipe Díaz Vidaurre Library. It simplifies key processes like book loans, returns, and reservations, improving efficiency for both staff and users while promoting better access to library resources. I contributed to the project as a backend developer, focusing on building reliable APIs and database logic to support the system’s core functionalities.Additionally, I developed and executed backend tests to ensure the reliability and performance of the system's core functionalities.",
    image: "image.png",
    technologies: ["NestJS", "Supertest", "Jest","MySQL"],
    github: "https://github.com/Inge-Biblioteca-Team/Hogar_De_Libros_Backend.git",
   
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            My Projects 
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Explore some of the projects I've worked on, showcasing my skills in  data analysis and web development.
          </p>
          <div className="mt-6 flex justify-center">
            <span className="inline-block w-20 h-1 rounded-full bg-emerald-500"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-blue-600"
                  >
                    <Github size={20} className="mr-1" />
                    Code
                  </a>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}