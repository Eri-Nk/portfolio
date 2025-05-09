import { Link } from "react-router";

const WebApps = ({ projects }) => {
  const webProjects = projects.filter((p) => p.category === "web-apps");

  return (
    <div>
      <h2 className="text-xl md:text-2xl text-primary mb-6 font-semibold text-center">
        Web Apps
      </h2>
      <ul className="flex flex-col items-center space-y-20 max-w-5xl mx-auto my-6">
        {webProjects.map((project) => {
          const screenshot = project.screenShots[0];
          return (
            <li key={project.id} className="w-full max-w-4xl ">
              <Link
                to={`/projects/${project.category}/${project.id}`}
                className="block"
              >
                <div className="block md:flex shadow-lg rounded-lg overflow-hidden bg-white">
                  {screenshot && (
                    <img
                      src={screenshot.src}
                      alt={project.title}
                      className="w-48 h-32 md:h-auto object-cover mx-auto md:mx-0"
                    />
                  )}
                  <div className=" py-3 md:py-0 px-4 flex flex-col justify-center text-text">
                    <h3 className="text-lg font-semibold text-primary">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {project.body.split("\n")[0]} ...{" "}
                      <span className="text-secondary underline cursor-pointer">
                        Read More
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WebApps;
