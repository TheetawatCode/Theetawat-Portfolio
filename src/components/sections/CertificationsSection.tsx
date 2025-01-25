// components/Certifications.tsx
import { certificationsData } from '../../data/certificationsData';

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert) => (
            <div key={cert.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold">{cert.title}</h3>
              <p className="text-gray-700 mt-2">{cert.issuer}</p>
              <p className="text-gray-500 mt-2">{cert.date}</p>
              <a
                href={cert.link}
                className="text-blue-900 hover:underline mt-4 block"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;