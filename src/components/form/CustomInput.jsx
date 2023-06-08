function CustomInput({
  classNames,
  inputType = "text",
  inputValue = "",
  inputName = "",
  inputId,
  inputMinLength = 1,
  inputMaxLength = 30,
  labelText,
  placeholderText = "",
  onChangeHandler = () => {},
  ...otherProps
}) {
  return (
    <div className="flex-1">
      <label
        htmlFor={inputId}
        className="block mb-2 text-sm font-medium text-gray-900">
        {labelText}
      </label>

      <input
        {...otherProps}
        type={inputType}
        value={inputValue}
        name={inputName}
        id={inputId}
        minLength={inputMinLength}
        maxLength={inputMaxLength}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 ${classNames}`}
        placeholder={placeholderText}
        required
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default CustomInput;
