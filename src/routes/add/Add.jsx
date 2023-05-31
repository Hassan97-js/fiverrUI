import {
  AgreeCheckbox,
  FileInput,
  SelectInput,
  TextInput,
  TextareaInput
} from "../../components";

function Add() {
  const options = [
    { value: "choose", label: "Choose a category" },
    { value: "design", label: "Design" },
    { value: "web-dev", label: "Web Dev" },
    { value: "app-dev", label: "App Dev" },
    { value: "music-audio", label: "Music & Audio" }
  ];

  return (
    <form className="section-container">
      <div className="flex flex-col gap-x-10 gap-y-7 mb-6">
        <div className="flex flex-col md:flex-row gap-x-8 gap-y-6">
          <TextInput
            labelText="Title"
            inputId="title"
            placeholderText="e.g. I will do something I am really good at"
          />

          <TextInput
            labelText="Service title"
            inputId="service-title"
            placeholderText="e.g. One-page web design"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-x-8 gap-y-6">
          <SelectInput
            inputId="category"
            defaultValue="choose"
            labelText="Category"
            options={options}
          />

          <TextareaInput
            inputId="short-description"
            labelText="Short description"
            placeholderText="Short description of you service"
          />
        </div>

        <FileInput inputId="cover-img-dropzone-file" titleText="Cover image" />

        <FileInput inputId="uplaod-imgs-dropzone-file" titleText="Upload images" />

        <TextareaInput
          inputId="description"
          labelText="Description"
          placeholderText="Brief description to introduce your services to customers"
        />

        <div className="flex flex-col md:flex-row gap-x-8 gap-y-6">
          <TextInput inputId="revision-number" labelText="Revision number" />
          <TextInput
            inputId="delivery-time"
            labelText="Delivery time (e.g. 3 days)"
          />
        </div>

        <div className="flex flex-col gap-4">
          <TextInput
            inputId="first-feature"
            labelText="First feature"
            placeholderText="e.g. page design"
          />

          <TextInput
            inputId="second-feature"
            labelText="Second feature"
            placeholderText="e.g. file uploading"
          />

          <TextInput
            inputId="third-feature"
            labelText="Third feature"
            placeholderText="e.g. setting up a domain"
          />

          <TextInput
            inputId="fourth-feature"
            labelText="Fourth feature"
            placeholderText="e.g. hosting"
          />
        </div>

        <TextInput inputId="price" labelText="Price" />
      </div>

      <AgreeCheckbox inputId="remember" />

      <button type="button" className="btn btn-primary">
        Create
      </button>
    </form>
  );
}

export default Add;
