function AgreeCheckbox({ inputId }) {
  return (
    <div className="flex items-start mb-6">
      <div className="flex items-center h-5">
        <input
          id={inputId}
          type="checkbox"
          value=""
          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-300 outline-none"
          required
        />
      </div>

      <label htmlFor={inputId} className="ml-2 text-sm font-medium text-gray-900">
        I agree with the&nbsp;
        <a href="#" className="text-green-600 hover:underline">
          terms and conditions
        </a>
        .
      </label>
    </div>
  );
}

export default AgreeCheckbox;
