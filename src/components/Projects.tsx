import { Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t } = useTranslation();

  const projects = t("projects.list", { returnObjects: true }) as {
    title: string;
    description: string;
    technologies: string[];
    image?: string;
    github: string;
  }[];

  // Mapea las URLs manualmente (porque no se traducen)
  const githubLinks = [
    "https://github.com/dian7875/Auth_Identity_Server.git",
    "https://github.com/pauli038/Migraine-Analysis.git",
    "https://github.com/Inge-Biblioteca-Team/Hogar_De_Libros_Backend.git",
  ];

  const images = [
    "https://www.safepaas.com/wp-content/uploads/2021/11/IDM-Blog-1024x576.png",
    "migraine.png",
    "image.png"
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            {t("projects.title")}
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>
          <div className="mt-6 flex justify-center">
            <span className="inline-block w-20 h-1 rounded-full bg-emerald-500"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={images[index]}
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
                    href={githubLinks[index]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-blue-600"
                  >
                    <Github size={20} className="mr-1" />
                    {t("projects.code")}
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
