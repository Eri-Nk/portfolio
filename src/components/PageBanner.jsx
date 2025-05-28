// components/PageBanner.jsx
import { Link } from "react-router";

const PageBanner = ({ title, category, bg }) => {
  return (
    <div
      className="relative h-48 md:h-64 bg-cover bg-center flex flex-col items-center justify-center"
      style={{
        backgroundImage: bg ? `url(${bg})` : undefined,
        backgroundColor: bg ? undefined : "#b0b0bf",
      }}
    >
      {/*for overlay*/}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Project Name */}
      <h1 className="relative text-white text-xl lg:text-3xl font-bold z-10 py-4 capitalize">
        {title}
      </h1>

      {/* breadcrumb */}
      <ul className="relative flex items-center space-x-2  text-base lg:text-lg font-semibold z-10">
        <li className=" text-gray-300">
          <Link to="/" className="visited:text-gray-300 hover:underline">
            Home
          </Link>
        </li>
        {category && (
          <>
            <span>/</span>
            <li className="capitalize text-gray-300">
              <Link
                to={`/projects/${category}#app`}
                className="visited:text-gray-300 hover:underline"
              >
                {category.replace("-", " ")}
              </Link>
            </li>
          </>
        )}
        <span>/</span>
        <li className="capitalize text-white">{title}</li>
      </ul>
    </div>
  );
};

export default PageBanner;
