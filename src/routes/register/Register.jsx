import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CustomInput, FileInput } from "../../components";

import { makeApiRequest } from "../../utils";

const registerFormState = {
  email: "",
  username: "",
  password: "",
  profileImg: "",
  country: ""
};

const Register = () => {
  const [formState, setFormState] = useState(registerFormState);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    console.log(formState);
  }, [formState]);

  useEffect(() => {
    console.log(error);
  }, [error]);

  const handleChange = (event) => {
    const {
      name: eventName,
      value: eventValue,
      files: fileEventValue
    } = event.target;

    fileEventValue && console.log("fileEventValue", [...fileEventValue]);

    const currentEventValue = fileEventValue ? [...fileEventValue][0] : eventValue;

    setFormState((prevState) => {
      return {
        ...prevState,
        [eventName]: currentEventValue
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = {
        email: formState.email,
        username: formState.username,
        password: formState.password,
        profileImg: formState.profileImg,
        country: formState.country
      };

      const response = await makeApiRequest("post", "/auth/register", data);

      if (response.status !== 200) {
        throw Error(`Something went wrong: ${response.status}`);
      }

      // navigate("/");

      setError(null);
      setFormState(registerFormState);
    } catch (error) {
      const { message } = error.response.data;
      setError(message);
      throw Error(message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="section-container flex flex-col lg:flex-row justify-center gap-x-16">
      <div className="flex flex-col gap-x-10 gap-y-9 w-full">
        <span className="text-4xl font-bold self-start">Register</span>

        <div>
          <div className="flex flex-col gap-x-8 gap-y-6">
            <CustomInput
              inputValue={formState.username}
              inputName="username"
              labelText="Username"
              inputId="username"
              placeholderText="Enter your username"
              onChangeHandler={handleChange}
            />

            <CustomInput
              inputValue={formState.email}
              inputName="email"
              labelText="Email"
              inputId="email"
              placeholderText="Enter your email address"
              onChangeHandler={handleChange}
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

            <FileInput
              inputId="profile-img-dropzone-file"
              titleText="Profile Picture"
              inputName="profileImg"
              onChangeHandler={handleChange}
            />

            <CustomInput
              classNames="mb-3"
              inputValue={formState.country}
              inputName="country"
              labelText="Country"
              inputId="country"
              placeholderText="Enter your country name"
              onChangeHandler={handleChange}
            />
          </div>

          {error && <span className="text-sm text-red-600">{error}</span>}
        </div>

        <button type="submit" className="btn btn-primary self-start">
          Register
        </button>
      </div>

      <div className="flex flex-col gap-x-10 gap-y-9 w-full">
        <span className="text-4xl font-bold self-start ">Become a seller</span>

        <div>
          <div className="flex flex-col gap-x-8 gap-y-6">
            {/* <CustomInput
              inputValue={formState.username}
              inputName="username"
              labelText="Username"
              inputId="username"
              placeholderText="Enter your username"
              onChangeHandler={handleChange}
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
            /> */}
          </div>

          {error && <span className="text-sm text-red-600">{error}</span>}
        </div>
      </div>
    </form>
  );
};

export default Register;
