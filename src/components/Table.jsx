import { useNavigate } from "react-router-dom";

const Table = ({ data, striped = true, clickable = false }) => {
  const { tableHeaders, tableData, isMessages } = data[0];

  const navigate = useNavigate();

  return (
    <div className="relative shadow-md overflow-x-auto">
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
            const isUnread = item.data?.lastMessage?.unread;
            const linkRoutePath = item.data?.routePath;

            const handleNavigate = () => {
              clickable ? navigate(linkRoutePath ?? "") : null;
            };

            return (
              <tr
                key={item.id}
                className={`border-b ${clickable ? "cursor-pointer" : ""} ${
                  isUnread ? "bg-green-100/50" : ""
                }${striped && idx % 2 !== 0 ? "bg-gray-50" : ""}`}>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  onClick={handleNavigate}>
                  {item.data?.imgURL ? (
                    <img
                      className="w-10 h-10 object-cover object-center rounded-sm"
                      src={item.data.imgURL}
                      alt="An image describing a gig"
                    />
                  ) : (
                    item.data.buyer
                  )}
                </td>

                <td
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  onClick={handleNavigate}>
                  <p className="truncate w-96">
                    {item.data?.title || item.data.lastMessage.text}
                  </p>
                </td>

                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {item.data?.price || item.data.date}
                </td>

                {!isMessages &&
                  (item.data?.sales || item.data?.buyer || item.data?.seller) && (
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {item.data?.sales || item.data?.buyer || item.data?.seller}
                    </td>
                  )}

                <td className="pl-10 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {item.data?.action || item.data.contact}
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
