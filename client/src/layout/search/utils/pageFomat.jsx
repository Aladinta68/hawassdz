export const setGridTemp = ({  isRow, breakpoint }) => {
  let GridTemp;
  if (isRow) {
    return (GridTemp = "repeat(1,1fr)");
  } else if (breakpoint === "base") {
    return (GridTemp = "repeat(1,1fr)");
  } else if (breakpoint === "md") {
    return (GridTemp = "repeat(2,1fr)");
  }
  return GridTemp;
};
export const setisHorizontal = ({ breakpoint, isRow }) => {
  if (breakpoint === "base") {
    return false;
  } else return isRow;
};
export const center = ({ breakpoint, isRow }) => {
  if (breakpoint === "base") {
    return true;
  } else if (!isRow) {
    return true;
  }

  return false;
};
