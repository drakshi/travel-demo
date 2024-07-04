import "./App.css";
import FeatColumn from "./components/FeatColumn";
import FeatureDescriptionSection from "./components/FeatureDescriptionSection";
import Header from "./components/Header";
import HeaderHomePage from "./components/HeaderHomePage";
import InfoWidget from "./components/InfoWidget";

function App() {
  return (
    <>
      <Header />
      <HeaderHomePage />
      <InfoWidget />
      <FeatColumn />
      <FeatureDescriptionSection />
    </>
  );
}

export default App;
