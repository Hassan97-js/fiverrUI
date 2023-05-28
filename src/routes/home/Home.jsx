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

      <div className="container mx-auto py-24 px-6">
        <GigCategorySlider responsive={responsive}>
          {GigCategoriesCards}
        </GigCategorySlider>
      </div>

      <Features />
      <FiverrBusiness />

      <div className="container mx-auto py-24 px-6">
        <GigProjectsSlider
          className="shadow-md"
          itemsClass="p-6"
          responsive={responsive}>
          {GigProjectsCards}
        </GigProjectsSlider>
      </div>
    </>
  );
};

export default Home;
