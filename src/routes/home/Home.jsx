import { Featured, TrustedBy, Slider } from "../../components";

import { GigCategoryCard, Features, FiverrBusiness } from "../../components";

import { gigCategories } from "../../data";

import "./Home.scss";

const Home = () => {
  const GigCategoriesCards = gigCategories.map((category) => {
    return <GigCategoryCard key={category.id} item={category} />;
  });

  return (
    <>
      <Featured />
      <TrustedBy />
      <Slider>{GigCategoriesCards}</Slider>
      <Features />
      <FiverrBusiness />
    </>
  );
};

export default Home;
