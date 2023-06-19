import { Outlet } from "react-router-dom";

import { Navbar, Footer } from "../components";

function Root() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default Root;
