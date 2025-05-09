const FloatingLabelInput = ({ label, compType, name, value, onChange }) => {
  const InputComponent = compType === "textarea" ? "textarea" : "input";
  return (
    <div className="relative w-full mb-4">
      <InputComponent
        type={compType === "textarea" ? undefined : compType}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="peer w-full px-2 py-4 border border-gray-300 rounded-md focus:border-blue-500 outline-none placeholder-transparent  resize-none bg-white"
        placeholder={label}
        rows={compType === "textarea" ? 5 : undefined}
      />
      <label
        className={`absolute left-3 bg-white px-1 text-blue-500 transform transition-all duration-300 top-[0.1rem] text-[0.9rem] -translate-y-1/2 pointer-events-none
    
        ${
          label === "Message"
            ? "peer-placeholder-shown:top-5"
            : "peer-placeholder-shown:top-1/2"
        }
    peer-placeholder-shown:text-base
    peer-placeholder-shown:text-gray-500

    peer-focus:top-[0.1rem]
    peer-focus:text-[0.9rem]
    peer-focus:text-blue-500
  `}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingLabelInput;
