import { useTranslation } from 'react-i18next';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const { t } = useTranslation();

  const experienceList = t('experience.list', { returnObjects: true }) as {
    role: string;
    company: string;
    year: string;
    summary: string;
    tasks: string[];
    technologies: string[];
  }[];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white">
            {t('experience.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('experience.subtitle')}
          </p>
          <div className="mt-6 flex justify-center">
            <span className="inline-block w-20 h-1 rounded-full bg-emerald-500"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experienceList.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700 transition-colors"
            >
              <div className="flex items-center text-emerald-700 dark:text-emerald-400 mb-4">
                <Briefcase className="mr-3" size={28} />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{exp.role}</h3>
                  <p className="text-gray-500 dark:text-gray-300">{exp.company}</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 dark:text-gray-400 mb-3">{exp.year}</p>
              <p className="text-gray-600 dark:text-gray-300 mb-2 whitespace-pre-line">{exp.summary}</p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 mb-4">
                {exp.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-300 text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}