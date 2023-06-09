import InputErrorMessage from "./InputErrorMessage";

export default function FormInput({
  type,
  inputValue,
  placeholder,
  inputName,
  onChange,
  isError,
  errMessage,
}) {
  const className = isError
    ? "block w-full border rounded-md px-4 py-3.5 outline-none focus:ring-1 border-red-500 focus:border-red-500 focus:ring-red-300 bg-white text-black"
    : "block w-full border rounded-md px-4 py-3.5 outline-none focus:ring-1 border-gray-300 focus:border-blue-500 focus:ring-blue-300 bg-white text-black";
  return (
    <>
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        value={inputValue}
        onChange={onChange}
        name={inputName}
      />
      {isError && <InputErrorMessage message={errMessage} />}
    </>
  );
}
