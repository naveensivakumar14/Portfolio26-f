import Mern from "../assets/images/EMC-MERN.png";
import ReactJS from "../assets/images/LDH-React.jpg";



const certifications = [
  {
    title: "Full Stack Development (MERN)",
    image: Mern,
  },
  {
    title: "React JS",
    image: ReactJS,
  },
];

const GCertification = () => {
  return (
    <section className="bg-[#0f172a] text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-500">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-[#1e293b] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              {/* Certificate Image */}
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-64 object-cover"
              />

              {/* Title */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold">
                  {cert.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GCertification;
