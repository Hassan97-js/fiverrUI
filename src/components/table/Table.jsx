const Table = ({ data }) => {
  const { tableHeaders, tableData } = data[0];

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            {tableHeaders.map((tableHeader, idx) => {
              return (
                <th key={idx} scope="col" className="px-6 py-3">
                  {tableHeader.text}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {tableData.map((item, idx) => {
            return (
              <tr key={idx} className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {item.theadText}
                </th>

                {item.data.map((itemData, idx) => {
                  return (
                    <td key={idx} className="px-6 py-4">
                      {itemData.text}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
