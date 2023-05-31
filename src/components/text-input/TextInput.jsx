function TextInput({ labelText, inputId, placeholderText = "" }) {
  return (
    <div className="flex-1">
      <label
        htmlFor={inputId}
        className="block mb-2 text-sm font-medium text-gray-900">
        {labelText}
      </label>

      <input
        type="text"
        id={inputId}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
        placeholder={placeholderText}
        required
      />
    </div>
  );
}

export default TextInput;
