import { useEffect, useState } from "react";
import FloatingLabelInput from "./FloatingLabelInput";

const ContactForm = () => {
  // state variables
  const [formData, setFormData] = useState({
    personName: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState();

  // form logic
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

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong");
      }
      setMessage("Submission Successful");
      setFormData({ personName: "", email: "", message: "" });
    } catch (error) {
      setMessage("Error in submission. Please try again. ");
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
        }, 10000);

        return () => clearTimeout(timeOut);
      }
    }
  }, [message]);
  return (
    <div className="flex flex-col justify-center w-[90%] max-w-md sm:max-w-lg mx-auto ">
      <form
        className=" p-6 bg-white dark:bg-[#5e5e61] shadow-2xl rounded-lg space-y-6 "
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
          className={`relative w-full py-2 px-4 rounded text-white transition-colors duration-200 ${
            isLoading
              ? "bg-[#106353] cursor-not-allowed"
              : "bg-secondary hover:brightness-110"
          }`}
        >
          {/* Keeps button height consistent */}
          <span className="invisible">Submit</span>

          {/* Visually centered content */}
          <span className="absolute inset-0 flex justify-center items-center">
            {isLoading ? (
              <span className="w-5 h-5 border-2 border-gray-300 border-t-gray-500 rounded-full animate-spin"></span>
            ) : (
              "Submit"
            )}
          </span>
        </button>
      </form>
      {message && (
        <div
          className={`mt-4 p-2 bg-gray-100 border-l-4 rounded text-center 
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
