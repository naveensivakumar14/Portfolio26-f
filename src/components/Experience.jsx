import { motion } from "framer-motion";


const experiences = [
  {
    title: "Senior Healthcare Analyst",
    company: "NTT Data",
    period: "March 2023 – Present",
    duration: "3 Years",
  },
  {
    title: "Full Stack Developer",
    company: "Error Makes Clever",
    period: "June 2024 – December 2024",
    duration: "7 Months",
  },
  {
    title: "Backend Developer Intern",
    company: "ZATN Technologies",
    period: "December 2024 – January 2025",
    duration: "2 Months",
  },
  {
    title: "React JS Intern",
    company: "LearnzDevelopment Hub",
    period: "Februay 2025 – March 2025",
    duration: "2 Months",
  },
];

const Experience = () => {
  return (
    <section className="bg-[#0f172a] text-white py-20">
     
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-500">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#1e293b] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                {/* Left Side */}
                <div>
                  <h3 className="text-2xl font-semibold">{exp.title}</h3>
                  <p className="text-gray-400 mt-2">{exp.company}</p>
                </div>

                {/* Right Side */}
                <div className="text-right">
                  <p className="text-blue-400 font-medium">{exp.period}</p>
                  <p className="text-sm text-gray-400 mt-1">{exp.duration}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
