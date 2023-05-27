import {
  AboutSeller,
  Breadcrumb,
  Slider,
  Stars,
  Reviews,
  GigCTA
} from "../../components";

import { uiConfig } from "../../data";

const { responsiveItemsOne } = uiConfig;

import "./Gig.css";

const Gig = () => {
  const gigServices = [
    {
      id: 1,
      text: "Prompt writing"
    },
    {
      id: 2,
      text: "Artwork delivery"
    },
    {
      id: 3,
      text: "Image upscaling"
    },
    {
      id: 4,
      text: "Aditional design"
    }
  ];

  return (
    <section className="gig-section relative container mx-auto py-24 px-8 text-neutral-700">
      <div className="flex flex-col gap-10">
        <div>
          <Breadcrumb>FIVERR &gt; GRAPHICS & DESIGN &gt;</Breadcrumb>
          <h1 className="text-neutral-800">
            I will create AI generated art for you
          </h1>

          <div className="user flex gap-3 mt-4">
            <img
              className="rounded-full object-cover w-7 h-7"
              src="https://picsum.photos/200"
              alt=""
            />

            <div>
              <span className="font-medium">John Doe</span>
              <Stars>5</Stars>
            </div>
          </div>
        </div>

        <Slider
          className="max-w-full lg:max-w-3xl rounded-md"
          containerClass="gig-slider"
          responsive={responsiveItemsOne}>
          <img
            src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <img
            className="object-cover object-center"
            src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <img
            className="object-cover object-center"
            src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <img
            className="object-cover object-center"
            src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <img
            className="object-cover object-center"
            src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <img
            className="object-cover object-center"
            src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
        </Slider>

        <div>
          <h2 className="text-neutral-800 mb-4 font-medium">About This Gig</h2>
          <p>
            I use an AI program to create images based on text prompts. This means I
            can help you to create a vision you have through a textual description of
            your scene without requiring any reference images. Some things I&ops;ve
            found it often excels at are: Character portraits (E.g. a picture to go
            with your DnD character) Landscapes (E.g. wallpapers, illustrations to
            compliment a story) Logos (E.g. Esports team, business, profile picture)
            You can be as vague or as descriptive as you want. Being more vague will
            allow the AI to be more creative which can sometimes result in some
            amazing images. You can also be incredibly precise if you have a clear
            image of what you want in mind. All of the images I create are original
            and will be found nowhere else. If you have any questions you&ops;re more
            than welcome to send me a message.
          </p>
        </div>

        <AboutSeller
          sellerName="Anna Bell"
          aboutSeller="My name is Anna, I enjoy creating AI generated art in my spare time. I
              have a lot of experience using the AI program and that means I know
              what to prompt the AI with to get a great and incredibly detailed
              result."
          fromCountry="USA"
          languages="English"
          lastDelivery="1 day"
          memberDate="Aug 2022"
          rating="5"
          responseTime="4 hours"
          sellerImg="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
        />

        <Reviews />
      </div>

      <GigCTA
        deliveryDays="2"
        description="I will create a unique high quality AI generated image based on a description that you give me"
        price="59.99"
        priceText="1 AI generated image"
        revisionsNumber="3"
        services={gigServices}
      />
    </section>
  );
};

export default Gig;
