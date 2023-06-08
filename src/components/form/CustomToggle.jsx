function CustomToggle({
  containerClassNames = "",
  inputName = "",
  labelText,
  isToggled = false,
  onChangeHandler
}) {
  return (
    <div className={containerClassNames}>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          name={inputName}
          value=""
          className="sr-only peer"
          checked={isToggled}
          onChange={onChangeHandler}
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-green-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
        <span className="ml-3 text-sm font-medium">{labelText}</span>
      </label>
    </div>
  );
}

export default CustomToggle;
