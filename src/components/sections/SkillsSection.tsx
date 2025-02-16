import { skillsData } from '../../data/skillsData'; // นำเข้า skillsData จากไฟล์ skillsData.ts

const SkillsSection = () => {
  // ดึงข้อมูลแต่ละประเภทจาก skillsData
  const { frontendDev, programmingLanguages, backendDev, database, versionControl, devOps, others } = skillsData[0];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-5xl px-4 mx-auto">
        <h2 className="text-3xl font-bold text-white">./&nbsp; Skills</h2>

        {/* Frontend Development */}
        <div className="mt-8">
          <div className="flex items-center gap-4">
            <h3 className="text-lg font-semibold text-gray-100">Frontend Development :</h3>
            <div className="flex flex-wrap gap-4">
              {frontendDev.map((skill, index) => (
                <div
                  key={index}
                  className="px-4 py-2 text-sm font-medium text-blue-900 transition-colors duration-500 bg-white border border-blue-900 rounded-full hover:bg-blue-700 hover:text-white hover:shadow-lg"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Programming Languages */}
        <div className="mt-4">
          <div className="flex items-center gap-4">
            <h3 className="text-lg font-semibold text-gray-100">Programming Languages :</h3>
            <div className="flex flex-wrap gap-4">
              {programmingLanguages.map((skill, index) => (
                <div
                  key={index}
                  className="px-4 py-2 text-sm font-medium text-blue-900 transition-colors duration-500 bg-white border border-blue-900 rounded-full hover:bg-blue-700 hover:text-white hover:shadow-lg"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Backend Development */}
        <div className="mt-4">
          <div className="flex items-center gap-4">
            <h3 className="text-lg font-semibold text-gray-100">Backend Development :</h3>
            <div className="flex flex-wrap gap-4">
              {backendDev.map((skill, index) => (
                <div
                  key={index}
                  className="px-4 py-2 text-sm font-medium text-blue-900 transition-colors duration-500 bg-white border border-blue-900 rounded-full hover:bg-blue-700 hover:text-white hover:shadow-lg"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Database */}
        <div className="mt-4">
          <div className="flex items-center gap-4">
            <h3 className="text-lg font-semibold text-gray-100">Database :</h3>
            <div className="flex flex-wrap gap-4">
              {database.map((skill, index) => (
                <div
                  key={index}
                  className="px-4 py-2 text-sm font-medium text-blue-900 transition-colors duration-500 bg-white border border-blue-900 rounded-full hover:bg-blue-700 hover:text-white hover:shadow-lg"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Version Control */}
        <div className="mt-4">
          <div className="flex items-center gap-4">
            <h3 className="text-lg font-semibold text-gray-100">Version Control :</h3>
            <div className="flex flex-wrap gap-4">
              {versionControl.map((skill, index) => (
                <div
                  key={index}
                  className="px-4 py-2 text-sm font-medium text-blue-900 transition-colors duration-500 bg-white border border-blue-900 rounded-full hover:bg-blue-700 hover:text-white hover:shadow-lg"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DevOps & Infrastructure */}
        <div className="mt-4">
          <div className="flex items-center gap-4">
            <h3 className="text-lg font-semibold text-gray-100">DevOps & Infrastructure :</h3>
            <div className="flex flex-wrap gap-4">
              {devOps.map((skill, index) => (
                <div
                  key={index}
                  className="px-4 py-2 text-sm font-medium text-blue-900 transition-colors duration-500 bg-white border border-blue-900 rounded-full hover:bg-blue-700 hover:text-white hover:shadow-lg"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Others */}
        <div className="mt-4">
          <div className="flex items-center gap-4">
            <h3 className="text-lg font-semibold text-gray-100">Others :</h3>
            <div className="flex flex-wrap gap-4">
              {others.map((skill, index) => (
                <div
                  key={index}
                  className="px-4 py-2 text-sm font-medium text-blue-900 transition-colors duration-500 bg-white border border-blue-900 rounded-full hover:bg-blue-700 hover:text-white hover:shadow-lg"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;