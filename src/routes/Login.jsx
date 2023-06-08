import { useFetcher } from "react-router-dom";

import { CustomInput } from "../components";

function Login() {
  const fetcher = useFetcher();
  console.log(fetcher.state);

  // TODO: FROM HERE
  const busy = fetcher.state === "submitting";
  return (
    <fetcher.Form
      method="post"
      className="section-container flex flex-col justify-center items-center">
      <div className="flex flex-col gap-x-10 gap-y-9 w-1/4 min-w-max">
        <h1 className="self-start">Login</h1>

        <div>
          <div className="flex flex-col gap-x-8 gap-y-6">
            <CustomInput
              inputName="username"
              labelText="Username"
              inputId="username"
              placeholderText="Enter your username"
              autoFocus={true}
            />

            <CustomInput
              classNames="mb-3"
              inputName="password"
              inputType="password"
              labelText="Password"
              inputId="password"
              placeholderText="Enter your password"
            />
          </div>

          {/* {error && <span className="text-sm text-red-600">{error}</span>} */}
        </div>

        <button disabled={busy} type="submit" className="btn btn-primary self-start">
          Log in
        </button>
      </div>
    </fetcher.Form>
  );
}

export default Login;
