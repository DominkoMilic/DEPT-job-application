import "./ColorAmountBox.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ColorAmountBox({
  numberOfColorsToGenerate,
  setNumberOfColorsToGenerate,
}) {
  const handleChangeNumberOfColors = (isAdding) => {
    if (isAdding)
      setNumberOfColorsToGenerate((prev) => (prev + 1 >= 10 ? 10 : prev + 1));
    else setNumberOfColorsToGenerate((prev) => (prev - 1 <= 1 ? 1 : prev - 1));
  };

  return (
    <div className="color-amount-picker-container">
      <button onClick={() => handleChangeNumberOfColors(false)}>
        <ChevronLeft size={20} color="black" strokeWidth={3} />
      </button>
      <div className="number-of-colors">{numberOfColorsToGenerate}</div>
      <button onClick={() => handleChangeNumberOfColors(true)}>
        <ChevronRight size={20} color="black" strokeWidth={3} />
      </button>
    </div>
  );
}

export default ColorAmountBox;
