import { redirect } from "react-router-dom";
import { makeApiRequest } from "../utils";

async function submitLogin({ request }) {
  try {
    const formData = await request.formData();

    const username = formData.get("username");
    const password = formData.get("password");

    const data = {
      username,
      password
    };

    const response = await makeApiRequest("post", "/auth/login", data);

    if (response.status > 399 && response.status < 600) {
      throw Error(`Something went wrong: ${response.status}`);
    }

    // TODO: use loader instead?
    localStorage.setItem("currentUser", JSON.stringify(response.data));

    return redirect("/");
  } catch (error) {
    return error;
  }
}

async function submitRegister({ request }) {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());

    if (!data?.isSeller) {
      data.isSeller = false;
    } else if (data?.isSeller === "on") {
      data.isSeller = true;
    }

    // console.log(data);

    const response = await makeApiRequest("post", "/auth/register", data);

    if (response.status > 399 && response.status < 600) {
      throw Error(`Something went wrong: ${response.status}`);
    }
    // console.log(response);

    return redirect("/");
  } catch (error) {
    return error;
  }
}

function filterGigsBy({ request }) {
  try {
    // if (response.status > 399 && response.status < 600) {
    //   throw Error(`Something went wrong: ${response.status}`);
    // }
    // https://reactrouter.com/en/main/hooks/use-submit
    // https://reactrouter.com/en/main/hooks/use-fetcher#fetchersubmit
    console.log(request);
    return null;
  } catch (error) {
    return error;
  }
}

export { filterGigsBy, submitLogin, submitRegister };
