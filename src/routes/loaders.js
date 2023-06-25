import { defer } from "react-router-dom";

import { makeApiRequest } from "../utils";

async function getGigsFromDB({ request }) {
  try {
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.search);

    if (!searchParams.get("sortBy")) {
      searchParams.append("sortBy", "createdAt");
    }

    const gigsPromise = makeApiRequest("get", "gigs", null, searchParams);

    return defer({ gigsPromise });
  } catch (error) {
    throw Error(error);
  }
}

async function getGigFromDB({ params }) {
  try {
    const gigPromise = makeApiRequest("get", `gigs/single/${params.id}`);

    // TODO: GET GIG REVIEWS FROM DB

    return defer({ gigPromise });
  } catch (error) {
    throw Error(error);
  }
}

export { getGigFromDB, getGigsFromDB };
