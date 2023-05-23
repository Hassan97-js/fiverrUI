import { useState } from "react";
import { RouteGigProjectCard, Breadcrumb, Button } from "../../components";

import { routeGigs } from "../../data";

import "./Gigs.scss";

const Gigs = () => {
  const [selected, setSelected] = useState("sales");

  /* Handler */
  const handleSelect = (event) => {
    const { value } = event.target;
    setSelected(value);
  };

  /* JSX */
  const routeGigCards = routeGigs.map((gig) => {
    return <RouteGigProjectCard key={gig.id} gig={gig} />;
  });

  return (
    <section className="gigs-section container py-24">
      <Breadcrumb>FIVERR &gt; GRAPHICS & DESIGN &gt;</Breadcrumb>

      <h1 className="mb-4">AI Artists</h1>
      <h3 className="fw-300">
        Explore the boundaries of art and technology with Fiverr&apos;s AI artists
      </h3>

      <div className="gigs-menu flex item-center justify-between my-4">
        <form className="left flex items-center gap-3 py-5">
          <span className="budget">Budget</span>
          <input className="min-input" type="text" placeholder="min" />
          <input className="max-input" type="text" placeholder="max" />
          <Button type="button" sm={true}>
            Apply
          </Button>
        </form>

        <div className="right relative flex justify-end items-center gap-3">
          <span className="sort-by">Sort by</span>

          <form>
            <select
              className="select-dropdown bg-white p-3 outline-0 radius-base cursor-pointer"
              value={selected}
              onChange={handleSelect}>
              <option value="createdAt">Newest</option>
              <option value="sales">Best Selling</option>
            </select>
          </form>
        </div>
      </div>

      <div className="gigs grid gap-10">{routeGigCards}</div>
    </section>
  );
};

export default Gigs;
