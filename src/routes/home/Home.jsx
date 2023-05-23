import {
  Featured,
  TrustedBy,
  SliderGigCategoryCard,
  SliderGigProjectCard,
  Features,
  FiverrBusiness,
  Slider as GigCategorySlider,
  Slider as GigProjectsSlider
} from "../../components";

import { gigCategories, gigProjects, uiConfig } from "../../data";

const { responsive } = uiConfig;

import "./Home.scss";

const Home = () => {
  const GigCategoriesCards = gigCategories.map((category) => {
    return <SliderGigCategoryCard key={category.id} item={category} />;
  });
  const GigProjectsCards = gigProjects.map((project) => {
    return <SliderGigProjectCard key={project.id} project={project} />;
  });
  return (
    <>
      <Featured />
      <TrustedBy />

      <div className="container py-24">
        <GigCategorySlider
          draggable={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}>
          {GigCategoriesCards}
        </GigCategorySlider>
      </div>

      <Features />
      <FiverrBusiness />

      <div className="container py-24">
        <GigProjectsSlider
          styles={{
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.15)",
            borderRadius: "0.375rem"
          }}
          itemsClass="p-6"
          draggable={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}>
          {GigProjectsCards}
        </GigProjectsSlider>
      </div>
    </>
  );
};

export default Home;
