import "./Featured.scss";

const Featured = () => {
  return (
    <section className="featured">
      <div className="left">
        <h1>Find the perfect freelance services for your business</h1>
        <div className="search">
          <div className="search-input">
            <img src="" alt="" />
            <input type="text" placeholder="Try building mobile app" />
          </div>

          <button>Search</button>
        </div>

        <div className="popular">
          <span>Popular</span>
          <button>Web Design</button>
          <button>Wordpress</button>
          <button>Logo Design</button>
          <button>AI Services</button>
        </div>
      </div>
      <div className="right">
        <h2>Right</h2>
      </div>
    </section>
  );
};

export default Featured;
