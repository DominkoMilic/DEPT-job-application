import "./Controls.css";
import { useState } from "react";
import ColorAmountBox from "./ColorAmountBox";
import { getColors } from "../../../../api/deptFetches";

function Controls({ setGeneratedColors }) {
  const [numberOfColorsToGenerate, setNumberOfColorsToGenerate] = useState(1);

  const handleGenerateColorsClick = async () => {
    const data = await getColors(numberOfColorsToGenerate);
    setGeneratedColors(data);
  };

  return (
    <div className="colors-generator-container">
      <h2>Generate colors</h2>
      <div className="colors-generator-buttons-container">
        <ColorAmountBox
          numberOfColorsToGenerate={numberOfColorsToGenerate}
          setNumberOfColorsToGenerate={setNumberOfColorsToGenerate}
        />
        <button
          className="generate-colors-button"
          onClick={handleGenerateColorsClick}
        >
          GENERATE COLORS
        </button>
      </div>
    </div>
  );
}

export default Controls;
