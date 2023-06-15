function CustomInput({
  classNames = "",
  inputType = "text",
  inputName = "",
  inputId = "",
  inputMinLength = 1,
  inputMaxLength = 30,
  labelText = "",
  lableClassNames = "text-gray-900",
  placeholderText = "",
  onChangeHandler = () => {},
  isRequired = true,
  ...otherProps
}) {
  return (
    <div className="flex-1">
      <label
        htmlFor={inputId}
        className={`block mb-2 text-sm font-medium ${lableClassNames}`}>
        {labelText}
      </label>

      <input
        {...otherProps}
        type={inputType}
        name={inputName}
        id={inputId}
        minLength={inputMinLength}
        maxLength={inputMaxLength}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 outline-none block w-full p-2.5 ${classNames}`}
        placeholder={placeholderText}
        autoComplete="on"
        required={isRequired}
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default CustomInput;
