import { useFetcher, useLoaderData } from "react-router-dom";

import { RouteGigProjectCard, Breadcrumb, CustomInput } from "../../components";

import "./Gigs.css";

/**
 * TODOS:
 * FETCH GIGS FROM DB
 */

function Gigs() {
  const fetcher = useFetcher();

  const axiosResponse = useLoaderData();

  const data = axiosResponse?.data;

  const handleSelect = () => {
    // const { value } = event.target;
    fetcher.submit(
      { idle: true },
      {
        method: "post",
        action: "/gigs"
      }
    );
  };

  const routeGigCards = data?.map((gig, idx) => {
    const { _id: gigId, gigCoverImg, price, description } = gig;

    return (
      <RouteGigProjectCard
        key={gigId}
        gigId={idx + 1}
        gigCoverImg={gigCoverImg}
        price={price}
        description={description}
        stars="5"
      />
    );
  });

  return (
    <section className="gigs-section section-container text-neutral-700">
      <Breadcrumb>FIVERR &gt; GRAPHICS & DESIGN &gt;</Breadcrumb>

      <h1 className="mb-4 text-neutral-800">AI Artists</h1>
      <h5 className="font-normal">
        Explore the boundaries of art and technology with Fiverr&apos;s AI artists
      </h5>

      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5 my-4">
        <form className="flex flex-col py-5">
          <div className="flex flex-col mb-5">
            <CustomInput
              classNames="mb-5"
              lableClassNames="text-gray-600"
              labelText="Min price"
              inputName="min"
              placeholderText="min"
            />

            <CustomInput
              lableClassNames="text-gray-600"
              labelText="Max price"
              inputName="max"
              placeholderText="max"
            />
          </div>

          <button type="button" className="btn btn-secondary btn-xs tracking-wider">
            Apply
          </button>
        </form>

        <div className="relative flex flex-col lg:flex-row lg:justify-end lg:items-center lg:gap-3 w-96">
          <span className="font-medium -mb-2">Sort by</span>

          <fetcher.Form className="my-4">
            <select
              className="bg-white border border-neutral-300 outline-0 radius-base p-3 w-52 cursor-pointer rounded-sm"
              defaultValue="createdAt"
              onChange={handleSelect}>
              <option value="createdAt">Newest</option>
              <option value="sales">Best Selling</option>
            </select>
          </fetcher.Form>
        </div>
      </div>

      <div className="gigs grid gap-10">{routeGigCards}</div>
    </section>
  );
}

export default Gigs;
