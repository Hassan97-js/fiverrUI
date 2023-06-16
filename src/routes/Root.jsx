import { Outlet, useNavigation } from "react-router-dom";

import { Navbar, Footer, Spinner } from "../components";

function Root() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      {isLoading && <Spinner />}

      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default Root;
