import "./App.css";
import FeatColumn from "./components/FeatColumn";
import FeatureDescriptionSection from "./components/FeatureDescriptionSection";
import Header from "./components/Header";
import HeaderHomePage from "./components/HeaderHomePage";
import InfoWidget from "./components/InfoWidget";
import useIsMobileDevice from "./hooks/useIsMobileDevice";

function App() {
  const isMobile = useIsMobileDevice();
  return (
    <div className={`${isMobile ? "w-[125vw]" : ""}`}>
      <Header />
      <HeaderHomePage />
      <InfoWidget />
      <FeatColumn />
      <FeatureDescriptionSection />
    </div>
  );
}

export default App;
