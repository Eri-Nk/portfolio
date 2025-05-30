import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ErrorBoundary } from "react-error-boundary";
import ErrorScreen from "./components/ErrorScreen";
import { BrowserRouter } from "react-router";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <ErrorBoundary FallbackComponent={ErrorScreen}>
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </ErrorBoundary>
);
