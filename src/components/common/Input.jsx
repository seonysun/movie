const Input = ({
  label,
  type = "text",
  placeholder = "입력하세요",
  errorMessage = "",
  isError = false,
  ...props
}) => {
  return (
    <div className="w-full flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...props}
        className={`h-9 rounded-md bg-transparent px-3 py-1 transition-colors border-2 outline-none ${
          isError ? "border-rose-500" : "border-gray-300"
        }`}
      />
      {isError && <p className="text-sm text-rose-500">{errorMessage}</p>}
    </div>
  );
};

export default Input;
