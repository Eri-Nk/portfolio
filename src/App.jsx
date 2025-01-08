import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Header from "./Header";
import { About, Home } from "./pages";

const routes = [
  { path: "/home", element: <Home /> },
  { path: "/about", element: <About /> },
];

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            {routes.map(({ path, element }, idx) => (
              <Route key={idx} path={path} element={element} />
            ))}
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
