import { AboutSeller, Breadcrumb, Slider, Stars, Reviews } from "../../components";

import { uiConfig } from "../../data";

const { responsiveItemsOne } = uiConfig;

import "./Gig.scss";

const Gig = () => {
  return (
    <section className="gig-section container py-24">
      <div className="left flex flex-column gap-10">
        <div>
          <Breadcrumb>FIVERR &gt; GRAPHICS & DESIGN &gt;</Breadcrumb>
          <h1>I will create AI generated art for you</h1>

          <div className="user flex gap-3">
            <img
              className="radius-full object-cover"
              src="https://picsum.photos/200"
              alt=""
              width={30}
              height={30}
            />

            <div>
              <span className="fw-500">John Doe</span>
              <Stars>5</Stars>
            </div>
          </div>
        </div>

        <Slider containerClass="radius-md" responsive={responsiveItemsOne}>
          <img
            src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <img
            className="object-cover object-position-center"
            src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <img
            className="object-cover object-position-center"
            src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <img
            className="object-cover object-position-center"
            src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <img
            className="object-cover object-position-center"
            src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <img
            className="object-cover object-position-center"
            src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
        </Slider>

        <div>
          <h2 className="mb-1">About This Gig</h2>
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
    </section>
  );
};

export default Gig;
