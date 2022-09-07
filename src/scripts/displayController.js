import KnightsTravails from "./KnightsTravails";
import KnightsTour from "./KnightsTour";
import KnightsTourWarnsdorff from "./KnightsTourWarnsdorff";

const displayController = (() => {
  const renderBoard = (board, DOMelem) => {};

  const getRandomNumberUpTo = (max) => {
    return Math.floor(Math.random() * ((max || 8) - 4 + 1) + 4);
  };

  let N = 6;

  const updateN = (newN) => {
    N = newN;
  };

  const travailKnight = (boardSize) => {
    console.log("hi");
    const startTravails = performance.now();
    const result = KnightsTravails([1, 1], [boardSize, boardSize], boardSize);
    // const result = output.map();
    const endTravails = performance.now();
    console.log(
      "KnightsTravails performance time: " +
        `${((endTravails - startTravails) / 1000).toFixed(
          2
        )} seconds - RESULT: ` +
        result[1]
    );
  };
  const travailKnightDOM = document.getElementById("travail-Knight");
  travailKnightDOM.addEventListener("mousedown", () => {
    travailKnight(N);
  });

  const tourKnight = (boardSize) => {
    const startTour = performance.now();
    const result = KnightsTour(1, 1, boardSize);
    const endTour = performance.now();
    console.log(
      "KnightsTour performance time: " +
        `${((endTour - startTour) / 1000).toFixed(2)} seconds - RESULT: ` +
        result
    );
  };
  const tourKnightDOM = document.getElementById("tour-Knight");
  tourKnightDOM.addEventListener("mousedown", () => {
    tourKnight(N);
  });

  const tourKnightWarnsdorff = (boardSize) => {
    const startTour = performance.now();
    const result = KnightsTourWarnsdorff(1, 1, boardSize);
    const endTour = performance.now();
    console.log(
      "KnightsTourWarnsdorff performance time: " +
        `${((endTour - startTour) / 1000).toFixed(2)} seconds - RESULT: ` +
        result
    );
  };
  const tourKnightWDOM = document.getElementById("tour-Knight-Warnsdorff");
  tourKnightWDOM.addEventListener("mousedown", () => {
    tourKnightWarnsdorff(N);
  });

  return {
    updateN,
    travailKnight,
    tourKnight,
    tourKnightWarnsdorff,
  };
})();

export default displayController;
