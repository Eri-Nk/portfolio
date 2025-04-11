import { Link } from "react-router";

const WebApps = ({ projects }) => {
  const webProjects = projects.filter((p) => p.category === "web-apps");

  return (
    <div>
      <h2 className="text-center font-bold text-2xl my-10 text-primary">
        Web Apps
      </h2>
      <ul className="flex flex-col items-center gap-6 max-w-5xl mx-auto my-6">
        {webProjects.map((project) => {
          const screenshot = project.screenShots[0];
          return (
            <li key={project.id} className="w-full max-w-4xl">
              <Link
                to={`/projects/${project.category}/${project.id}`}
                className="block"
              >
                <div className="flex shadow-lg rounded-lg overflow-hidden bg-white">
                  {screenshot && (
                    <img
                      src={screenshot.src}
                      alt={project.title}
                      className="w-48 h-32 object-cover"
                    />
                  )}
                  <div className="px-4 flex flex-col justify-center text-text">
                    <h2 className="text-lg font-semibold text-primary">
                      {project.title}
                    </h2>
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
