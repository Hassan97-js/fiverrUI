import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

import { CustomInput, FileInput, CustomToggle, TextareaInput } from "../components";

import { makeApiRequest } from "../utils";

const registerFormState = {
  email: "",
  username: "",
  password: "",
  profileImg: "",
  country: "",
  phone: "",
  description: "",
  isSeller: false
};

function Register() {
  const [formState, setFormState] = useState(registerFormState);
  const [error, setError] = useState(null);

  // const navigate = useNavigate();

  useEffect(() => {
    console.log(formState);
  }, [formState]);

  useEffect(() => {
    console.log(error);
  }, [error]);

  const handleToggleChange = (event) => {
    const { name: eventName, checked: checkedValue } = event.target;

    setFormState((prevState) => {
      return {
        ...prevState,
        [eventName]: checkedValue
      };
    });
  };

  const handleChange = (event) => {
    const {
      name: eventName,
      value: eventValue,
      files: fileEventValue
    } = event.target;

    // fileEventValue && console.log("fileEventValue", fileEventValue[0]);

    let currentEventValue;

    if (eventValue) {
      currentEventValue = eventValue;
    }

    if (fileEventValue) {
      currentEventValue = fileEventValue[0];
    }

    setFormState((prevState) => {
      return {
        ...prevState,
        [eventName]: currentEventValue
      };
    });
  };

  const handleFormReset = () => {
    setFormState(registerFormState);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = {
        email: formState.email,
        username: formState.username,
        password: formState.password,
        profileImg: formState.profileImg,
        country: formState.country,
        phone: formState.phone,
        description: formState.description,
        isSeller: formState.isSeller
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
      className="section-container flex flex-col-reverse lg:flex-row justify-center gap-16">
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

        <div className="flex gap-4">
          <button type="submit" className="btn btn-primary self-start">
            Register
          </button>

          <button
            type="button"
            className="btn btn-primary-outline self-start"
            onClick={handleFormReset}>
            Reset
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-x-10 gap-y-9 w-full">
        <span className="text-4xl font-bold self-start">Become a seller</span>

        <div>
          <div className="flex flex-col gap-x-8 gap-y-6 mt-8">
            <CustomToggle
              inputName="isSeller"
              labelText="Activate account"
              isToggled={formState.isSeller}
              onChangeHandler={handleToggleChange}
            />

            <CustomInput
              inputValue={formState.phone}
              inputName="phone"
              labelText="Phone Number"
              inputId="phone"
              placeholderText="Enter your phone number"
              onChangeHandler={handleChange}
            />

            <TextareaInput
              inputValue={formState.description}
              inputName="description"
              inputId="description"
              labelText="Description"
              placeholderText="A short description of yourself"
              onChangeHandler={handleChange}
            />
          </div>

          {error && <span className="text-sm text-red-600">{error}</span>}
        </div>
      </div>
    </form>
  );
}

export default Register;
