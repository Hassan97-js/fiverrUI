import { useFetcher } from "react-router-dom";

import { CustomInput, FileInput, CustomToggle, TextareaInput } from "../components";

function Register() {
  const fetcher = useFetcher();
  const axiosResponse = fetcher?.data?.response;
  const actionError = axiosResponse?.data?.message;

  return (
    <fetcher.Form
      method="post"
      className="section-container flex flex-col-reverse lg:flex-row justify-center gap-16">
      <div className="flex flex-col gap-x-10 gap-y-9 w-full">
        <span className="text-4xl font-bold self-start">Register</span>

        {actionError && (
          <span className="text-normal font-bold text-red-500">{actionError}</span>
        )}

        <div>
          <div className="flex flex-col gap-x-8 gap-y-6">
            <CustomInput
              inputName="username"
              labelText="Username"
              inputId="username"
              placeholderText="Enter your username"
            />

            <CustomInput
              inputName="email"
              labelText="Email"
              inputId="email"
              placeholderText="Enter your email address"
            />

            <CustomInput
              classNames="mb-3"
              inputName="password"
              inputType="password"
              labelText="Password"
              inputId="password"
              placeholderText="Enter your password"
            />

            <FileInput
              inputId="profile-img-dropzone-file"
              titleText="Profile Picture"
              inputName="profileImg"
            />

            <CustomInput
              classNames="mb-3"
              inputName="country"
              labelText="Country"
              inputId="country"
              placeholderText="Enter your country name"
            />
          </div>
        </div>

        <div className="flex gap-4">
          <button type="submit" className="btn btn-primary self-start">
            Register
          </button>

          <button type="reset" className="btn btn-primary-outline self-start">
            Reset
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-x-10 gap-y-9 w-full">
        <span className="text-4xl font-bold self-start">Become a seller</span>

        <div>
          <div className="flex flex-col gap-x-8 gap-y-6 mt-8">
            <CustomToggle inputName="isSeller" labelText="Activate account" />

            <CustomInput
              inputName="phone"
              labelText="Phone Number"
              inputId="phone"
              placeholderText="Enter your phone number"
            />

            <TextareaInput
              inputName="description"
              inputId="description"
              labelText="Description"
              placeholderText="A short description of yourself"
            />
          </div>
        </div>
      </div>
    </fetcher.Form>
  );
}

export default Register;
