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

      <div className="bg-gray-50">
        <div className="section-container">
          <GigCategorySlider responsive={responsive}>
            {GigCategoriesCards}
          </GigCategorySlider>
        </div>
      </div>

      <Features />
      <FiverrBusiness />

      <div className="section-container">
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
