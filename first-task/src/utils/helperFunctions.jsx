const addNonExistingColorToPalette = (allColors, color) => {
  if (allColors.find((singleColor) => singleColor === color))
    alert("That color is already in your palette!");
  else {
    allColors.push(color);
    localStorage.setItem("colors", JSON.stringify(allColors));
  }
};

const getColorsFromLocalStorage = () => {
  const allColorsRetrieved = localStorage.getItem("colors");
  const allColors = JSON.parse(allColorsRetrieved);
  return allColors;
};

const removeSingleColorFromMyPalette = (color, setDidPaletteChange) => {
  const allColors = getColorsFromLocalStorage();
  const index = allColors.indexOf(color);
  if (index > -1) {
    allColors.splice(index, 1);
    setDidPaletteChange((prev) => !prev);
    localStorage.setItem("colors", JSON.stringify(allColors));
  }
};

export {
  addNonExistingColorToPalette,
  getColorsFromLocalStorage,
  removeSingleColorFromMyPalette,
};
