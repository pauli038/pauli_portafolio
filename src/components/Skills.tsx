import { Database, LineChart, Brain, Code, GraduationCap } from "lucide-react";

const skills = [
  {
    category: "Programming",
    icon: Code,
    items: ["Python", "NestJS","C#", "SQL"],
  },
  {
    category: "Data Analysist",
    icon: LineChart,
    items: ["Pandas","Power BI","Microsoft Excel"],
  },
  {
    category: "Testing",
    icon: Brain,
    items: ["Jest", "Supertest","Owasp", "Postman"],
  },
  {
    category: "Databases",
    icon: Database,
    items: ["SQL Server", "MySQL"],
  },
];

const education = [
  {
    degree: "Bachelor of Systems Engineering",
    institution: "Universidad Nacional de Costa Rica",
    year: "2020 - 2026",
  },
  {
    degree: "Diplomat Computers Applications Programming",
    institution: "Universidad Nacional de Costa Rica",
    year: "2020-2024",
  },
  {
    degree: "Introduction to Data Science",
    institution: "cisco Networking Academy",
    year: "2025",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-br from-white to-gray-100"
    >
      <div className="container mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
             Skills & Education
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            A journey of growth through code, data, and continuous learning.
          </p>
          <div className="mt-6 flex justify-center">
            <span className="inline-block w-20 h-1 rounded-full bg-emerald-500"></span>
          </div>
        </div>

        {/* Estudios */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-700 mb-8">
            🎓 Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.map((edu, index) => (
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
            💻 Technical Skills
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
