import "./SavedColorsDisplay.css";
import { useEffect, useState } from "react";
import { getColorsFromLocalStorage } from "../../../../../utils/helperFunctions";
import SingleColor from "../../../../common/SingleColor";

function SavedColorsDisplay({ didPaletteChange, setDidPaletteChange }) {
  const [colorsInMyPalette, setColorsInMyPalette] = useState(
    getColorsFromLocalStorage()
  );

  useEffect(() => {
    setColorsInMyPalette(getColorsFromLocalStorage());
  }, [didPaletteChange]);

  return (
    <div className="saved-colors-container">
      {colorsInMyPalette?.map((color, index) => {
        return (
          <SingleColor
            key={index}
            color={color}
            setDidPaletteChange={setDidPaletteChange}
            isMyPalette={true}
          />
        );
      })}
    </div>
  );
}

export default SavedColorsDisplay;
