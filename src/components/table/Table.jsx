const Table = ({ data }) => {
  const { tableHeaders, tableData } = data[0];

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs bg-gray-50 text-gray-700 uppercase">
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
              <tr
                key={item.id}
                className={`${idx % 2 !== 0 ? "border-b bg-gray-50" : ""}`}>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  <img
                    className="w-10 h-10 object-cover object-center rounded-sm"
                    src={item.data.imgURL}
                    alt="An image describing a gig"
                  />
                </td>

                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {item.data.title}
                </td>

                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {item.data.price}
                </td>

                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {item.data?.sales || item.data?.buyer || item.data?.seller}
                </td>
                <td
                  scope="row"
                  className="pl-10 py-4 font-medium text-gray-900 whitespace-nowrap">
                  <button>{item.data.action || item.data.contact}</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
