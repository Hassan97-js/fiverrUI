function TextInput({
  labelText,
  inputId,
  placeholderText = "",
  inputName = "",
  inputValue = "",
  onChangeHandler = () => {}
}) {
  return (
    <div className="flex-1">
      <label
        htmlFor={inputId}
        className="block mb-2 text-sm font-medium text-gray-900">
        {labelText}
      </label>

      <input
        value={inputValue}
        name={inputName}
        type="text"
        id={inputId}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
        placeholder={placeholderText}
        required
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default TextInput;
