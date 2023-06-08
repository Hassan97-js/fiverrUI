import { redirect } from "react-router-dom";
import { makeApiRequest } from "../utils";

async function submitLogin({ request }) {
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");

  try {
    const data = {
      username,
      password
    };

    const response = await makeApiRequest("post", "/auth/login", data);

    if (response.status !== 200) {
      throw Error(`Something went wrong: ${response.status}`);
    }

    // use Context API instead (LATER)
    localStorage.setItem("currentUser", JSON.stringify(response.data));

    return redirect("/");
  } catch (error) {
    const { message } = error.response.data;
    throw Error(message);
  }
}

export { submitLogin };
