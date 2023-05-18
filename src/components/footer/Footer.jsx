import { Link } from "react-router-dom";

import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiPinterestFill,
  RiTwitterFill
} from "react-icons/ri";

import assetsData from "../../assets";

import "./Footer.scss";

const { footerLogoSVG } = assetsData.svgs;

const Footer = () => {
  return (
    <footer className="footer p-6">
      <div className="container">
        <nav className="grid footer--grid">
          <ul role="list">
            <h2>Categories</h2>
            <li>
              <Link to=".">Graphics & Design</Link>
            </li>
            <li>
              <Link to=".">Digital Marketing</Link>
            </li>
            <li>
              <Link to=".">Writing & Translation</Link>
            </li>
            <li>
              <Link to="."> Video & Animation</Link>
            </li>
            <li>
              <Link to=".">Music & Audio</Link>
            </li>
            <li>
              <Link to=".">Programming & Tech</Link>
            </li>
            <li>
              <Link to=".">Data</Link>
            </li>
            <li>
              <Link to=".">Business</Link>
            </li>
            <li>
              <Link to=".">Lifestyle</Link>
            </li>
            <li>
              <Link to=".">Photography</Link>
            </li>
            <li>
              <Link to=".">Sitemap</Link>
            </li>
          </ul>

          <ul role="list" className="item">
            <h2>About</h2>
            <li>
              <Link to=".">Press & News</Link>
            </li>
            <li>
              <Link to=".">Partnerships</Link>
            </li>
            <li>
              <Link to=".">Privacy Policy</Link>
            </li>
            <li>
              <Link to=".">Terms of Service</Link>
            </li>
            <li>
              <Link to=".">Intellectual Property Claims</Link>
            </li>
            <li>
              <Link to=".">Investor Relations</Link>
            </li>
            <li>
              <Link to=".">Contact Sales</Link>
            </li>
          </ul>

          <ul role="list" className="item">
            <h2>Support</h2>
            <li>
              <Link to=".">Help & Support</Link>
            </li>
            <li>
              <Link to=".">Trust & Safety</Link>
            </li>
            <li>
              <Link to=".">Selling on Liverr</Link>
            </li>
            <li>
              <Link to=".">Buying on Liverr</Link>
            </li>
          </ul>

          <ul role="list" className="item">
            <h2>Community</h2>
            <li>
              <Link to=".">Customer Success Stories</Link>
            </li>
            <li>
              <Link to=".">Community hub</Link>
            </li>
            <li>
              <Link to=".">Forum</Link>
            </li>
            <li>
              <Link to=".">Events</Link>
            </li>
            <li>
              <Link to=".">Blog</Link>
            </li>
            <li>
              <Link to=".">Influencers</Link>
            </li>
            <li>
              <Link to=".">Affiliates</Link>
            </li>
            <li>
              <Link to=".">Podcast</Link>
            </li>
            <li>
              <Link to=".">Invite a Friend</Link>
            </li>
            <li>
              <Link to=".">Become a Seller</Link>
            </li>
            <li>
              <Link to=".">Community Standards</Link>
            </li>
          </ul>

          <ul role="list" className="item">
            <h2>More From Fiverr</h2>
            <li>
              <Link to=".">Liverr Business</Link>
            </li>
            <li>
              <Link to=".">Liverr Pro</Link>
            </li>
            <li>
              <Link to=".">Liverr Logo Maker</Link>
            </li>
            <li>
              <Link to=".">Liverr Guides</Link>
            </li>
            <li>
              <Link to=".">Get Inspired</Link>
            </li>
            <li>
              <Link to=".">Liverr Select</Link>
            </li>
            <li>
              <Link to=".">ClearVoice</Link>
            </li>
            <li>
              <Link to=".">Liverr Workspace</Link>
            </li>
            <li>
              <Link to=".">Learn</Link>
            </li>
            <li>
              <Link to=".">Working Not Working</Link>
            </li>
          </ul>
        </nav>

        <hr className="d-block w-100 my-8" />

        <div className="footer--bottom flex items-center justify-between gap-3">
          <div className="flex gap-3">
            <img src={footerLogoSVG} alt="fiverr logo" width="70" />
            <p>&copy; Fiverr International Ltd. 2023</p>
          </div>

          <div className="flex justify-center items-center gap-6 py-2">
            <RiFacebookCircleFill
              color="#666"
              size="2em"
              aria-label="A facebook logo"
            />
            <RiInstagramFill color="#666" size="2em" aria-label="A Instagram logo" />
            <RiLinkedinBoxFill
              color="#666"
              size="2em"
              aria-label="A LinkedIn logo"
            />
            <RiPinterestFill color="#666" size="2em" aria-label="A Pinterest logo" />
            <RiTwitterFill color="#666" size="2em" aria-label="A Twitter logo" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
