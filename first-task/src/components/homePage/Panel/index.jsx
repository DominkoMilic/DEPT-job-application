import "./Panel.css";
import MyPalette from "./MyPalette";
import Controls from "./Controls";

function Panel({ setGeneratedColors, didPaletteChange, setDidPaletteChange }) {
  return (
    <div className="panel-container">
      <MyPalette
        didPaletteChange={didPaletteChange}
        setDidPaletteChange={setDidPaletteChange}
      />
      <Controls setGeneratedColors={setGeneratedColors} />
    </div>
  );
}

export default Panel;
