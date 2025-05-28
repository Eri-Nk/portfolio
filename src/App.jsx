import { Routes, Route, Navigate, useLocation } from "react-router";
import Header from "./components/Header";
import {
  About,
  Home,
  ProjectDetail,
  AllProjects,
  WebApps,
  Contact,
  Skills,
} from "./pages";
import { useState, useEffect } from "react";
import { projects } from "./data/projects";
import Footer from "./components/Footer";

const routes = [
  { path: "/home", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/skills", element: <Skills /> },
];

const App = () => {
  const [isNavDropdownOpen, setIsNavDropdownOpen] = useState(false);
  const [stage, setStage] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setIsNavDropdownOpen(false);
  }, [location]);

  const toggleNavDropdown = () => {
    if (isNavDropdownOpen) {
      // Trigger exit animations
      setStage("exit");

      setTimeout(() => {
        setIsNavDropdownOpen(false);
        setStage(null);
      }, 800); // Matches exit animation duration
    } else {
      setStage("enter");
      setIsNavDropdownOpen(true);
    }
  };

  //montitoring the width of screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsNavDropdownOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      toggleNavDropdown();
    }
  };

  return (
    <div className="flex flex-col min-h-screen pt-[3rem] ">
      {isNavDropdownOpen && (
        <div
          className="fixed z-30 right-0 bottom-0 top-0 left-0 bg-black/50"
          onClick={handleBackdropClick}
        ></div>
      )}

      <Header
        isNavDropdownOpen={isNavDropdownOpen}
        toggleNavDropdown={toggleNavDropdown}
        setIsNavDropdownOpen={setIsNavDropdownOpen}
        stage={stage}
      />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          {routes.map(({ path, element }, idx) => (
            <Route key={idx} path={path} element={element} />
          ))}

          {/* using Outlet on Project.jsx page */}
          <Route path="/projects" element={<AllProjects />}>
            <Route index element={<Navigate to="web-apps" />} />
            <Route path="web-apps" element={<WebApps projects={projects} />} />
            {/* <Route path="mobile-apps" element={<MobileApps projects={projects} />} /> */}
            {/* <Route
              path="cross-platform-apps"
              element={<CrossPlatformApps projects={projects} />}
            /> */}
          </Route>

          {/* each project page */}
          {projects.map((project, index) => (
            <Route
              key={index}
              path={`/projects/${project.category}/${project.id}`}
              element={<ProjectDetail project={project} />}
            />
          ))}
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
