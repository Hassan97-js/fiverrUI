import { defer } from "react-router-dom";

import { makeApiRequest } from "../utils";

async function getGigsFromDB({ request }) {
  try {
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.search);

    if (!searchParams.get("sortBy")) {
      searchParams.append("sortBy", "createdAt");
    }

    const response = makeApiRequest("get", "gigs", null, searchParams);

    if (response.status > 399 && response.status < 600) {
      throw Error(`Something went wrong: ${response.status}`);
    }

    return defer({ gigs: response });
  } catch (error) {
    throw error.response.data;
  }
}

export { getGigsFromDB };
