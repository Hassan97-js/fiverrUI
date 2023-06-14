import { makeApiRequest } from "../utils";

async function getGigsFromDB() {
  try {
    const response = await makeApiRequest("get", "gigs");

    if (response.status > 399 && response.status < 600) {
      throw Error(`Something went wrong: ${response.status}`);
    }

    return response;
  } catch (error) {
    throw error.response.data;
  }
}

export { getGigsFromDB };
