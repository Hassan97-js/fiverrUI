import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CustomInput } from "../../components";

import { makeApiRequest } from "../../utils";

const loginFormState = {
  username: "",
  password: ""
};

const Login = () => {
  const [formState, setLoginFormState] = useState(loginFormState);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    console.log(formState);
  }, [formState]);

  useEffect(() => {
    console.log(error);
  }, [error]);

  const handleChange = (event) => {
    const changeEventName = event.target.name;
    const changeEventValue = event.target.value;

    setLoginFormState((prevState) => {
      return {
        ...prevState,
        [changeEventName]: changeEventValue
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = {
        username: formState.username,
        password: formState.password
      };

      const response = await makeApiRequest("post", "/auth/login", data);

      if (response.status !== 200) {
        throw Error(`Something went wrong: ${response.status}`);
      }

      // use Context API instead (LATER)
      localStorage.setItem("currentUser", JSON.stringify(response.data));
      navigate("/");

      setError(null);
      setLoginFormState(loginFormState);
    } catch (error) {
      const { message } = error.response.data;
      setError(message);
      throw Error(message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="section-container flex flex-col justify-center items-center">
      <div className="flex flex-col gap-x-10 gap-y-9 w-1/4 min-w-max">
        <h1 className="self-start">Login</h1>

        <div>
          <div className="flex flex-col gap-x-8 gap-y-6">
            <CustomInput
              inputValue={formState.username}
              inputName="username"
              labelText="Username"
              inputId="username"
              placeholderText="Enter your username"
              onChangeHandler={handleChange}
              autoFocus={true}
            />

            <CustomInput
              classNames="mb-3"
              inputValue={formState.password}
              inputName="password"
              inputType="password"
              labelText="Password"
              inputId="password"
              placeholderText="Enter your password"
              onChangeHandler={handleChange}
            />
          </div>

          {error && <span className="text-sm text-red-600">{error}</span>}
        </div>

        <button type="submit" className="btn btn-primary self-start">
          Log in
        </button>
      </div>
    </form>
  );
};

export default Login;
