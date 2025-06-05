import { useState } from "react";
import "./HomePage.css";
import ColorsDisplay from "../../components/homePage/ColorsDisplay";
import Panel from "../../components/homePage/Panel";

function HomePage() {
  const [generatedColors, setGeneratedColors] = useState([]);
  const [didPaletteChange, setDidPaletteChange] = useState(false);

  return (
    <div className="home-main-container">
      <ColorsDisplay
        generatedColors={generatedColors}
        setDidPaletteChange={setDidPaletteChange}
      />
      <Panel
        setGeneratedColors={setGeneratedColors}
        didPaletteChange={didPaletteChange}
        setDidPaletteChange={setDidPaletteChange}
      />
    </div>
  );
}

export default HomePage;
