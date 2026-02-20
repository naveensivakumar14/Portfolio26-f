import { useEffect, useState } from "react";

const Stats = () => {
  const [projects, setProjects] = useState(0);
  const [experience, setExperience] = useState(0);

  useEffect(() => {
    const projectInterval = setInterval(() => {
      setProjects((prev) => {
        if (prev < 10) {
          return prev + 1;
        } else {
          clearInterval(projectInterval);
          return prev;
        }
      });
    }, 500); // 0.5 seconds

    const experienceInterval = setInterval(() => {
      setExperience((prev) => {
        if (prev < 3) {
          return prev + 1;
        } else {
          clearInterval(experienceInterval);
          return prev;
        }
      });
    },30); // 0.2 seconds

    return () => {
      clearInterval(projectInterval);
      clearInterval(experienceInterval);
    };
  }, []);

  return (
    <section className="bg-[#0f172a] text-white py-16">
      <div className="max-w-5xl mx-auto flex justify-center gap-16 text-center">

        <div>
          <h2 className="text-7xl font-bold text-white">
            {projects}+
          </h2>
          <p className="mt-2 text-gray-300">Projects Completed</p>
        </div>

        <div>
          <h2 className="text-7xl font-bold text-white">
            {experience}+
          </h2>
          <p className="mt-2 text-gray-300">Years Experience</p>
        </div>

      </div>
    </section>
  );
};

export default Stats;
