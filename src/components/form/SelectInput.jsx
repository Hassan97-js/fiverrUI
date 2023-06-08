function SelectInput({ defaultValue, labelText, inputId, options }) {
  const optionElements = options.map((item) => {
    return (
      <option key={item.value} value={item.value}>
        {item.label}
      </option>
    );
  });

  return (
    <div className="flex-1">
      <label
        htmlFor={inputId}
        className="block mb-2 text-sm font-medium text-gray-900">
        {labelText}
      </label>

      <select
        defaultValue={defaultValue}
        id={inputId}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 outline-none">
        {optionElements}
      </select>
    </div>
  );
}

export default SelectInput;
