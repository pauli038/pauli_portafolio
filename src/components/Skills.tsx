import { useTranslation } from "react-i18next";
import { Database, LineChart, Brain, Code, GraduationCap } from "lucide-react";

export default function Skills() {
  const { t } = useTranslation();

  const skills = [
    {
      category: t("skills.categories.programming"),
      icon: Code,
      items: ["Python", "NestJS", "C#", "SQL"],
    },
    {
      category: t("skills.categories.data"),
      icon: LineChart,
      items: ["Pandas", "Power BI", "Microsoft Excel"],
    },
    {
      category: t("skills.categories.testing"),
      icon: Brain,
      items: ["Jest", "Supertest", "Owasp", "Postman"],
    },
    {
      category: t("skills.categories.databases"),
      icon: Database,
      items: ["SQL Server", "MySQL"],
    },
  ];

  const education:any = t("skills.education_list", { returnObjects: true });

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-white to-gray-100">
      <div className="container mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            {t("skills.title")}
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            {t("skills.subtitle")}
          </p>
          <div className="mt-6 flex justify-center">
            <span className="inline-block w-20 h-1 rounded-full bg-emerald-500"></span>
          </div>
        </div>

        {/* Estudios */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-700 mb-8">
            {t("skills.education")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.map((edu: any, index: number) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 border border-gray-200"
              >
                <div className="flex items-center mb-4 text-indigo-700">
                  <GraduationCap className="mr-3" size={26} />
                  <div>
                    <h4 className="text-lg font-bold">{edu.degree}</h4>
                    <p className="text-sm text-gray-600">{edu.institution}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500">{edu.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Habilidades técnicas */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-gray-700 mb-8">
            {t("skills.technical")}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.category}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 border border-gray-200"
              >
                <div className="flex items-center mb-4 text-emerald-700">
                  <skill.icon className="mr-3" size={28} />
                  <h4 className="text-xl font-semibold">{skill.category}</h4>
                </div>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
