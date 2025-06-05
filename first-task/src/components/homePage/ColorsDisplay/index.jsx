import "./ColorsDisplay.css";
import SingleColor from "../../common/SingleColor";

function ColorsDisplay({ generatedColors, setDidPaletteChange }) {
  return (
    <div className="colors-display-container">
      <h2>Create Your Custom Palette...</h2>
      <div className="random-colors-display-container">
        {generatedColors.length === 0 && (
          <p>Generate some colors to start...</p>
        )}
        {generatedColors?.map((color, index) => {
          return (
            <SingleColor
              key={index}
              color={color}
              isMyPalette={false}
              setDidPaletteChange={setDidPaletteChange}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ColorsDisplay;
