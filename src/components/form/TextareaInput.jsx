function TextareaInput({
  labelText = "",
  inputName = "",
  inputId = "",
  placeholderText = "",
  onChangeHandler = () => {}
}) {
  return (
    <div className="flex-1">
      <label
        htmlFor={inputId}
        className="block mb-2 text-sm font-medium text-gray-900">
        {labelText}
      </label>
      <textarea
        id={inputId}
        name={inputName}
        rows="4"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500 outline-none"
        placeholder={placeholderText}
        onChange={onChangeHandler}></textarea>
    </div>
  );
}

export default TextareaInput;
