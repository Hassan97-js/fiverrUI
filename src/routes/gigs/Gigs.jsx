import { RouteGigProjectCard } from "../../components";

import { routeGigs } from "../../data";

import "./Gigs.scss";

const Gigs = () => {
  const routeGigCards = routeGigs.map((gig) => {
    return <RouteGigProjectCard key={gig.id} gig={gig} />;
  });

  return (
    <section className="gigs container grid grid-cols--4 gap-10 py-24">
      {routeGigCards}
    </section>
  );
};

export default Gigs;
