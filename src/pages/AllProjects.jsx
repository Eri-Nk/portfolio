import { NavLink, Outlet } from "react-router";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router";
const categories = [
  { name: "Web Apps", path: "web-apps", disabled: false },
  { name: "Mobile Apps", path: "mobile-apps", disabled: true },
  { name: "Cross-Platform Apps", path: "cross-platform-apps", disabled: true },
];

const AllProjects = () => {
  const outletRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#app" && outletRef.current) {
      outletRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [location]);

  return (
    <div className="flex flex-col py-14 px-6">
      <h1 className="heading">My Projects</h1>
      <p>
        Here are some of the web applications I've built, focusing on
        functionality, performance, and user-friendly design. Each project
        represents a step in my journey as a developer, applying what I’ve
        learned and continuously improving along the way. My primary stack
        includes <span className="font-bold">React</span> for building dynamic
        user interfaces and <span className="font-bold">JavaScript</span> for
        handling interactivity.
      </p>
      <p className=" mt-4">
        I also work with backend technologies to build full-stack applications.
        Using <span className="font-bold">MongoDB</span> for database management
        and <span className="font-bold">Firebase</span> for authentication and
        real-time data handling, I ensure seamless user experiences.
        Additionally, I incorporate <span className="font-bold"> Node.js</span>{" "}
        and <span className="font-bold"> Express</span> for server-side logic
        and API development, allowing me to create scalable and efficient
        applications.
      </p>
      <p className=" mt-4">Stay tuned—more exciting projects are on the way!</p>

      <div className="bg-gray-100 border-l-4 border-secondary p-4 mt-6">
        <p className="text-gray-800">
          This portfolio was designed and built using
          <span className="font-bold"> React</span> for the frontend,
          <span className="font-bold"> Tailwind CSS</span> for styling, and
          <span className="font-bold"> MongoDB</span> for backend integrations.
          It’s a continuous work in progress, evolving alongside my skills and
          experience.
        </p>
      </div>

      <div className="flex justify-center my-8" id="app" ref={outletRef}>
        <div className="inline-flex space-x-9 shadow-lg px-3 py-2 rounded-lg bg-white">
          {categories.map(({ name, path, disabled }) =>
            disabled ? (
              <span
                key={name}
                className="relative group cursor-not-allowed text-gray-400"
              >
                {name}
                <span className="absolute left-1/2 -top-6 w-max -translate-x-1/2 scale-0 transition-transform bg-gray-800 text-white text-xs rounded px-2 py-1 group-hover:scale-100">
                  Coming Soon
                </span>
              </span>
            ) : (
              <NavLink
                key={name}
                to={path}
                className={({ isActive }) =>
                  `hover:underline ${
                    isActive ? "text-secondary" : "text-gray-600"
                  }`
                }
              >
                {name}
              </NavLink>
            )
          )}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default AllProjects;
