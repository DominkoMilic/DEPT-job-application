import { useState } from "react";
import "./SingleColor.css";
import {
  removeSingleColorFromMyPalette,
  addNonExistingColorToPalette,
} from "../../../utils/helperFunctions";

function SingleColor({ color, setDidPaletteChange, isMyPalette }) {
  const [isRemoveOptionHidden, setIsRemoveOptionHidden] = useState(true);

  const hanldeColorBlockClick = () => {
    if (!isMyPalette) {
      const allColorsRetrieved = localStorage.getItem("colors");
      if (!allColorsRetrieved) {
        localStorage.setItem("colors", JSON.stringify([color]));
        setDidPaletteChange((prev) => !prev);
      } else {
        const allColors = JSON.parse(allColorsRetrieved);
        addNonExistingColorToPalette(allColors, color);
        setDidPaletteChange((prev) => !prev);
      }
    }
  };

  const handleRemoveColorFromMyPaletteClick = () => {
    removeSingleColorFromMyPalette(color, setDidPaletteChange);
  };

  return (
    <div
      className={
        isMyPalette ? "single-color-my-palette" : "single-color-generated"
      }
      style={{ backgroundColor: `${color}` }}
      onClick={hanldeColorBlockClick}
      onMouseEnter={() => setIsRemoveOptionHidden(false)}
      onMouseLeave={() => setIsRemoveOptionHidden(true)}
    >
      {color}
      {!isRemoveOptionHidden && isMyPalette && (
        <button
          className="remove-color-from-my-palette"
          onClick={handleRemoveColorFromMyPaletteClick}
        >
          X
        </button>
      )}
    </div>
  );
}

export default SingleColor;
