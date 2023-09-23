import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import HowItWork from "./components/HowItWork";
import LandingPage from "./components/LandingPage";
import Services from "./components/Services";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./utils/LoginPage";
import ServiceType from "./pages/ServiceType";
import ShopOwnerDashboard from "./pages/ShopOwnerDashboard";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          index
          element={
            <>
              <NavBar />
              <LandingPage />
              <Services />
              <HowItWork />
              <AboutUs />
              <Footer />
            </>
          }
        />
        <Route
          path={"/login"}
          element={
            <main>
              <LoginPage />
            </main>
          }
        />
        <Route
          path={"/servicetype"}
          element={
            <main>
              <ServiceType />
            </main>
          }
        />
      <Route
          path={"/shopownerdashboard"}
          element={
            <main>
              <ShopOwnerDashboard />
            </main>
          }
        />
      </Routes>
    </>
  );
};

export default App;
