import InputErrorMessage from "./InputErrorMessage";

export default function FormInput({
  inputValue,
  placeholder,
  inputName,
  onChange,
  isError,
  errMessage,
}) {
  return (
    <>
      <input
        type="text"
        className="block w-full border rounded-md px-4 py-3.5 outline-none focus:ring-1 border-gray-300 focus:border-blue-500 focus:ring-blue-300 bg-white"
        placeholder={placeholder}
        value={inputValue}
        onChange={onChange}
        name={inputName}
      />
      {isError && <InputErrorMessage message={errMessage} />}
    </>
  );
}
