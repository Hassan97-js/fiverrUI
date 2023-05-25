import { Button } from "../../components";

import "./MyGigs.css";

const MyGigs = () => {
  return (
    <section className="myGig container py-24">
      <div className="flex items-center justify-between">
        <h1>Gigs</h1>
        <Button>Add New Gig</Button>
      </div>

      <table>
        <thead>
          <th>
            <tr>Image</tr>
            <tr>Title</tr>
            <tr>Price</tr>
            <tr>Orders</tr>
            <tr>Action</tr>
          </th>
        </thead>
      </table>
    </section>
  );
};

export default MyGigs;
