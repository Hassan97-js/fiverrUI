import { useEffect, useRef, useState } from "react";
import { useFetcher } from "react-router-dom";

import { UploadButton, UploadWidget } from "../components";

import { CustomInput, CustomToggle, TextareaInput } from "../components";

function Register() {
  const [uploadURL, setUploadURL] = useState("");
  const [uploadError, setUploadError] = useState(null);

  const fetcher = useFetcher();
  const axiosResponse = fetcher?.data?.response;
  const actionError = axiosResponse?.data?.message;

  const isBusy = fetcher.state === "submitting";
  const formRef = useRef(null);

  useEffect(() => {
    if (!isBusy) {
      formRef.current?.reset();
      setUploadURL("");
    }
  }, [isBusy]);

  const handleOnUpload = (error, result, widget) => {
    if (error) {
      setUploadError(error);

      widget.close({
        quiet: true
      });

      return;
    }

    setUploadURL(result?.info?.secure_url);
  };

  return (
    <fetcher.Form
      ref={formRef}
      method="post"
      className="section-container flex flex-col-reverse lg:flex-row justify-center gap-16">
      <div className="flex flex-col gap-x-10 gap-y-9 w-full">
        <span className="text-4xl font-bold self-start">Register</span>

        {actionError && (
          <span className="text-normal font-bold text-red-500">{actionError}</span>
        )}

        {uploadError && <span className="text-sm text-red-600">{uploadError}</span>}

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

            <div className="flex-1">
              <span className="block mb-2 text-sm font-medium text-gray-900">
                Profile Picture
              </span>

              <UploadWidget onUpload={handleOnUpload}>
                {({ openWidget }) => {
                  const handleOpenWidget = (event) => {
                    event.preventDefault();

                    openWidget();
                  };

                  return (
                    <>
                      <input
                        type="hidden"
                        id="imgURL"
                        name="imgURL"
                        value={uploadURL}
                      />

                      <UploadButton
                        handleOnClick={handleOpenWidget}
                        imgPreviewURL={uploadURL}
                      />
                    </>
                  );
                }}
              </UploadWidget>
            </div>

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
