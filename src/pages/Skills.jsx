import skillsData from "../data/skillsData";
import PageBanner from "../components/PageBanner";
import bg from "../assets/bg-photos/projectDetailBg.jfif";
import SkillsLoader from "../components/SkillsLoader";

const Skills = () => {
  return (
    <>
      <PageBanner bg={bg} title="Skills" />
      <div className="py-12 px-4 bg-[#f9f9f9]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-600 mb-10  mx-auto text-left ">
            Some of my favorite tools and technologies that bring ideas to life
            — from writing clean code to deploying polished applications.
          </p>

          <div className="flex flex-col gap-12">
            {skillsData.map((group, idx) => (
              <div key={idx}>
                <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">
                  {group.category}
                </h2>

                <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                  {group.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-4 bg-white p-4 rounded-lg shadow-md transition transform hover:scale-105 duration-300"
                    >
                      <div className="flex flex-col items-center gap-2">
                        {skill.icon}
                        <span className="text-gray-700 font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <SkillsLoader value={skill.value} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
