import skillsData from "../data/skillsData";
import PageBanner from "../components/PageBanner";
import bg from "../assets/bg-photos/projectDetailBg.jfif";
import PageHelmet from "../components/PageHelmet";
import { certificationsData } from "../data/skillsData";

const Skills = () => {
  return (
    <>
      <PageBanner bg={bg} title="Skills" />
      <PageHelmet
        title="Skills | Eri Portfolio"
        content="Technologies, development practices and emerging areas I'm exploring."
      />
      <section className="py-12 px-7">
        <div className="max-w-5xl mx-auto">
          {/* Introduction */}
          <p className="mb-12 max-w-3xl text-left text-gray-700 dark:text-gray-300">
            The technologies and practices I use to build practical web
            applications, alongside emerging areas I'm actively exploring and
            developing my knowledge in.
          </p>

          {/* Skills */}
          <div className="space-y-14">
            {skillsData.map((group) => (
              <div key={group.category}>
                <div className="mb-6">
                  <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-[#dceeff]">
                    {group.category}
                  </h2>

                  <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                    {group.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 bg-white dark:bg-[#070714] p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      <span className="text-2xl text-secondary shrink-0">
                        {skill.icon}
                      </span>

                      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-20">
            <div className="mb-6">
              <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-[#dceeff]">
                Certifications & Learning
              </h2>

              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Additional learning that supports my technical and professional
                development.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {certificationsData.map((certification) => (
                <a
                  key={certification.title}
                  href={certification.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${certification.title} certificate`}
                  className="flex items-center gap-4 bg-white dark:bg-[#070714] p-5 rounded-lg shadow-md
    hover:shadow-lg hover:-translate-y-1 transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-secondary"
                >
                  <span className="text-3xl text-secondary">
                    {certification.icon}
                  </span>

                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100">
                      {certification.title}
                    </h3>

                    <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">
                      {certification.issuer}
                    </p>

                    <span className="text-sm text-secondary mt-2 inline-block">
                      View Certificate ↗
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
