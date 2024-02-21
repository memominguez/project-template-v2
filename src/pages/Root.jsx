import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation-rev-2/Navigation";

function RootLayout() {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
