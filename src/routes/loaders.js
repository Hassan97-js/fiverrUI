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

export { getGigsFromDB };
