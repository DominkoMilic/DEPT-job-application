import "./MyPalette.css";
import SavedColorsDisplay from "./SavedColorsDisplay";

function MyPalette({ didPaletteChange, setDidPaletteChange }) {
  return (
    <div className="my-palette-container">
      <h2>My Palette</h2>
      <SavedColorsDisplay
        didPaletteChange={didPaletteChange}
        setDidPaletteChange={setDidPaletteChange}
      />
    </div>
  );
}

export default MyPalette;
