import { Link } from "react-router-dom";
import { Table } from "../components";

import { myGigsTableData } from "../data";

function MyGigs() {
  return (
    <section className="section-container">
      <div className="flex items-center justify-end mb-4">
        <Link to="/add" className="btn btn-primary">
          Add New Gig
        </Link>
      </div>

      <Table data={myGigsTableData} />
    </section>
  );
}

export default MyGigs;
