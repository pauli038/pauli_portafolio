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
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white">
            {t("projects.title")}
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300 max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>
          <div className="mt-6 flex justify-center">
            <span className="inline-block w-20 h-1 rounded-full bg-emerald-500"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-colors duration-300">
              <img
                src={images[index]}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-sm px-3 py-1 rounded-full"
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
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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