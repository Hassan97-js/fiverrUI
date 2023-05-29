import { Table } from "../../components";
import { ordersTableData } from "../../data";

import "./Orders.css";

const Orders = () => {
  return (
    <section className="section-container">
      <Table data={ordersTableData} />
    </section>
  );
};

export default Orders;
