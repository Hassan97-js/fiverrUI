import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

import {
  AboutSeller,
  Breadcrumb,
  Slider,
  Reviews,
  GigCTA,
  Spinner
} from "../../components";

import { uiConfig } from "../../data";

const { responsiveItemsOne } = uiConfig;

import "./Gig.css";

function Gig() {
  const { gigPromise } = useLoaderData();

  return (
    <section className="gig-section relative section-container text-neutral-700">
      <div className="flex flex-col gap-10">
        <Breadcrumb>FIVERR &gt; GRAPHICS & DESIGN &gt;</Breadcrumb>

        <Suspense fallback={<Spinner />}>
          <Await resolve={gigPromise}>
            {({ data: resolvedGig }) => {
              // console.log({ resolvedGig });

              const {
                _id: gigId,
                title,
                description,
                starNumber,
                gigImgs,
                userId: userInfo
              } = resolvedGig;
              const { imgURL, username } = userInfo;

              const fallbackImg = "https://picsum.photos/200";

              return (
                <>
                  <h1 className="text-neutral-800">{title}</h1>

                  <Slider
                    className="max-w-full lg:max-w-3xl rounded-md"
                    containerClass="gig-slider"
                    responsive={responsiveItemsOne}>
                    {gigImgs.map((imgURL) => {
                      return <img key={imgURL} src={imgURL} alt="" />;
                    })}
                  </Slider>

                  <div>
                    <h2 className="text-neutral-800 mb-4 font-medium">
                      About This Gig
                    </h2>
                    <p>{description}</p>
                  </div>

                  <AboutSeller
                    sellerName={username}
                    aboutSeller={`My name is ${username}, I enjoy creating AI generated art in my spare time. I have a lot of experience using the AI program and that means I know what to prompt the AI with to get a great and incredibly detailed result.`}
                    fromCountry="USA"
                    languages="English"
                    lastDelivery="1 day"
                    memberDate="Aug 2022"
                    rating={starNumber}
                    responseTime="4 hours"
                    sellerImg={imgURL || fallbackImg}
                  />

                  <Reviews gigId={gigId} />
                </>
              );
            }}
          </Await>
        </Suspense>
      </div>

      <Suspense fallback={<Spinner />}>
        <Await resolve={gigPromise}>
          {({ data: resolvedGigs }) => {
            const {
              features: services,
              deliveryTime: deliveryDays,
              price,
              revisionNumber,
              shortTitle,
              shortDescription
            } = resolvedGigs;

            return (
              <GigCTA
                deliveryDays={deliveryDays}
                description={shortDescription}
                price={price}
                priceText={shortTitle}
                revisionsNumber={revisionNumber}
                services={services}
              />
            );
          }}
        </Await>
      </Suspense>
    </section>
  );
}

export default Gig;
