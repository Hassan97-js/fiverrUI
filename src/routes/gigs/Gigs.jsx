import { RiArrowDownSLine } from "react-icons/ri";
import { RouteGigProjectCard, Breadcrumb, Button } from "../../components";

import { routeGigs } from "../../data";

import "./Gigs.scss";

const Gigs = () => {
  const routeGigCards = routeGigs.map((gig) => {
    return <RouteGigProjectCard key={gig.id} gig={gig} />;
  });

  return (
    <section className="container py-24">
      <Breadcrumb />
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
        <div className="right flex items-center gap-3">
          <span className="sort-by">Sort by</span>
          <button className="flex items-center gap-2 p-0 text-dark">
            <span className="sort-type fw-500">Best Selling</span>
            <RiArrowDownSLine
              color="#777"
              size="1.1em"
              aria-label="A facebook logo"
            />
          </button>
          <div className="select-dropdown">
            <span>Newest</span>
            <span>Best Selling</span>
          </div>
        </div>
      </div>
      <div className="gigs grid gap-10 ">{routeGigCards}</div>
    </section>
  );
};

export default Gigs;
