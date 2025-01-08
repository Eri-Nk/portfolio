import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ErrorBoundary } from "react-error-boundary";
import ErrorScreen from "./ErrorScreen";

createRoot(document.getElementById("root")).render(
  <ErrorBoundary FallbackComponent={ErrorScreen}>
    <App />
  </ErrorBoundary>
);
