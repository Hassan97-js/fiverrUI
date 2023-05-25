import Review from "./Review";

import "./Reviews.css";

const Reviews = () => {
  return (
    <section className="reviews">
      <h2>Reviews</h2>

      <div className="items flex flex-wrap gap-10">
        <Review
          sellerName="Garner David"
          sellerImgURL="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
          countryImgURL="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
          countryName="United States"
          description="I just want to say that art_with_ai was the first, and after this, the
            only artist Ill be using on Fiverr. Communication was amazing, each and
            every day he sent me images that I was free to request changes to."
        />

        <Review
          sellerName="Sidney Owen"
          sellerImgURL="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600"
          countryImgURL="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png"
          countryName="Germany"
          description="The designer took my photo for my book cover to the next level!
          Professionalism and ease of working with designer along with punctuality
          is above industry standards!! Whatever your project is, you need this
          designer!"
        />

        <Review
          sellerName="Lyle Giles"
          sellerImgURL="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600"
          countryImgURL="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
          countryName="Germany"
          description="Amazing work! Communication was amazing, each and every day he sent me
          images that I was free to request changes to. They listened, understood,
          and delivered above and beyond my expectations."
        />
      </div>
    </section>
  );
};

export default Reviews;
