import { Table } from "../../components";
import { ordersTableData } from "../../data";



const Orders = () => {
  return (
    <section className="section-container">
      <Table data={ordersTableData} />
    </section>
  );
};

export default Orders;
