import { Table } from "../../components";

import { messagesTableData } from "../../data";

import "./Messages.css";

const Messages = () => {
  return (
    <section className="section-container">
      <Table data={messagesTableData} striped={false} clickable={true} />
    </section>
  );
};

export default Messages;
