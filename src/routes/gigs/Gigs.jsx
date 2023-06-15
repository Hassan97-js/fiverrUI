import { Suspense } from "react";
import { Await, Form, useLoaderData } from "react-router-dom";

import {
  Spinner,
  RouteGigProjectCard,
  Breadcrumb,
  CustomInput
} from "../../components";

import "./Gigs.css";

/**
 * TODOS:
 *
 */

function Gigs() {
  const { gigs: gigsPromise } = useLoaderData();

  return (
    <section className="gigs-section section-container text-neutral-700">
      <Breadcrumb>FIVERR &gt; GRAPHICS & DESIGN &gt;</Breadcrumb>

      <h1 className="mb-4 text-neutral-800">AI Artists</h1>
      <h5 className="font-normal">
        Explore the boundaries of art and technology with Fiverr&apos;s AI artists
      </h5>

      <Form method="get" className="flex flex-col items-start py-5 gap-5 mt-6 mb-24">
        <div className="flex flex-col items-start mb-5 gap-5">
          <CustomInput
            lableClassNames="text-gray-600"
            labelText="Min price"
            inputName="min"
            placeholderText="min"
            isRequired={false}
          />

          <CustomInput
            lableClassNames="text-gray-600"
            labelText="Max price"
            inputName="max"
            placeholderText="max"
            isRequired={false}
          />
        </div>

        <div className="flex flex-col w-96">
          <span className="font-medium -mb-2 text-gray-600">Sort by</span>
          <select
            name="sortBy"
            defaultValue="createdAt"
            className="bg-white border border-neutral-300 outline-0 radius-base p-3 my-4 w-52 cursor-pointer rounded-sm">
            <option value="createdAt">Newest</option>
            <option value="sales">Best Selling</option>
          </select>
        </div>

        <button type="submit" className="btn btn-secondary btn-xs tracking-wider">
          Apply
        </button>
      </Form>

      <Suspense fallback={<Spinner />}>
        <Await resolve={gigsPromise}>
          {({ data: resolvedGigs }) => {
            const gigCards = resolvedGigs.map((gig, idx) => {
              const { _id: gigId, gigCoverImg, price, description, category } = gig;

              return (
                <RouteGigProjectCard
                  key={gigId}
                  gigId={idx + 1}
                  gigCoverImg={gigCoverImg}
                  price={price}
                  description={description}
                  category={category}
                  stars="5"
                />
              );
            });

            return <div className="gigs grid gap-10">{gigCards}</div>;
          }}
        </Await>
      </Suspense>
    </section>
  );
}

export default Gigs;
