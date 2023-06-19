import { Suspense } from "react";

import { Await, Form, useLoaderData } from "react-router-dom";

import { Spinner, GigCard, Breadcrumb, CustomInput, Alert } from "../../components";

import "./Gigs.css";

/**
 * TODOS:
 */

function Gigs() {
  const { gigsPromise } = useLoaderData();

  const GigsCardElements = ({ data: resolvedGigs }) => {
    const gigCards = resolvedGigs?.length ? (
      resolvedGigs.map((gig) => {
        const {
          _id: gigId,
          gigCoverImg,
          price,
          description,
          category,
          totalStars,
          starNumber,
          userId: userInfo
        } = gig;

        return (
          <GigCard
            key={gigId}
            userInfo={userInfo}
            gigId={gigId}
            totalStars={totalStars}
            starNumber={starNumber}
            gigCoverImg={gigCoverImg}
            price={price}
            description={description}
            category={category}
          />
        );
      })
    ) : (
      <Alert alertVariant="info">No gigs found with current filter</Alert>
    );

    return <div className="gigs grid gap-10">{gigCards}</div>;
  };

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
            inputId="min"
            lableClassNames="text-gray-600"
            labelText="Min price"
            inputName="min"
            placeholderText="min"
            isRequired={false}
          />

          <CustomInput
            inputId="max"
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
        <Await
          resolve={gigsPromise}
          errorElement={<Alert alertVariant="danger">Error loading the gigs</Alert>}>
          {GigsCardElements}
        </Await>
      </Suspense>
    </section>
  );
}

export default Gigs;
