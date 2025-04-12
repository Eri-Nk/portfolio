import { useEffect, useState } from "react";
import FloatingLabelInput from "../components/FloatingLabelInput";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    personName: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState();

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(import.meta.env.VITE_BACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log(result);

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      setFormData({ personName: "", email: "", message: "" });
      setMessage("Submission Successful");
    } catch (error) {
      console.error("Error submitting form:", error.message);
      setMessage("Error in submission: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (message) {
      // Only auto-dismiss if it's NOT an error
      const isError = message.toLowerCase().includes("error");

      if (!isError) {
        const timeOut = setTimeout(() => {
          setMessage(null);
        }, 7000);

        return () => clearTimeout(timeOut);
      }
    }
  }, [message]);

  return (
    <div>
      <form
        className="w-[90%] max-w-md sm:max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg space-y-6"
        onSubmit={handleSubmit}
      >
        <FloatingLabelInput
          label="Full Name"
          compType="text"
          name="personName"
          value={formData.personName}
          onChange={handleChange}
        />
        <FloatingLabelInput
          label="Email Address"
          compType="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <FloatingLabelInput
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          compType="textarea"
        />

        <button
          disabled={isLoading}
          type="submit"
          className={`w-full py-2 px-4 rounded text-white transition-colors duration-200 ${
            isLoading
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {isLoading ? (
            <span className="inline-block w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></span>
          ) : (
            "Submit"
          )}
        </button>
      </form>
      {message && (
        <div
          className={`mt-4 p-3 bg-gray-100 border-l-4 rounded 
      ${
        message.toLowerCase().includes("error")
          ? "border-red-500 text-red-700"
          : "border-green-500 text-green-700"
      }`}
        >
          {message}
          {message.toLowerCase().includes("error") && (
            <button
              onClick={() => setMessage(null)}
              className="ml-4 text-xl font-bold"
            >
              &times;
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ContactForm;
