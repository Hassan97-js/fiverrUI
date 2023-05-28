import { useState } from "react";
import { RouteGigProjectCard, Breadcrumb, Button } from "../../components";

import { routeGigs } from "../../data";

import "./Gigs.css";

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
    <section className="gigs-section section-container text-neutral-700">
      <Breadcrumb>FIVERR &gt; GRAPHICS & DESIGN &gt;</Breadcrumb>

      <h1 className="mb-4 text-neutral-800">AI Artists</h1>
      <h5 className="font-normal">
        Explore the boundaries of art and technology with Fiverr&apos;s AI artists
      </h5>

      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5 my-4">
        <form className="flex flex-col lg:flex-row lg:items-center gap-5 py-5">
          <p className="mb-2 lg:mb-0">Budget</p>

          <input type="text" placeholder="min" />

          <input type="text" placeholder="max" />

          <Button
            className="bg-green-600 tracking-wider font-medium rounded-md"
            type="button"
            sm={true}>
            Apply
          </Button>
        </form>

        <div className="relative flex flex-col lg:flex-row lg:justify-end lg:items-center lg:gap-3 w-96">
          <span className="font-medium -mb-2">Sort by</span>

          <form className="my-4">
            <select
              className="bg-white border border-neutral-300 outline-0 radius-base p-3 w-52 cursor-pointer rounded-sm"
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
