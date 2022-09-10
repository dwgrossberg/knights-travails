import KnightsTravails from "./KnightsTravails";
import KnightsTour from "./KnightsTour";
import KnightsTourWarnsdorff from "./KnightsTourWarnsdorff";

// Simple module to play with different board sizes and results

const displayController = (() => {
  let N = 6;

  const updateN = (newN) => {
    N = newN;
  };

  const renderBoard = () => {
    const boardDOM = document.getElementById("board");
    for (let i = 0; i < N; i++) {
      const row = document.createElement("div");
      row.classList.add("row");
      for (let j = 0; j < N; j++) {
        const square = document.createElement("div");
        square.classList.add("square");
        i % 2 === 0
          ? j % 2 === 0
            ? square.classList.add("odd")
            : square.classList.add("even")
          : j % 2 === 0
          ? square.classList.add("even")
          : square.classList.add("odd");
        row.appendChild(square);
      }
      boardDOM.appendChild(row);
    }
  };
  renderBoard();

  const getRandomNumberUpTo = (max) => {
    return Math.floor(Math.random() * ((max || 8) - 4 + 1) + 4);
  };

  const travailKnight = (boardSize) => {
    const startTravails = performance.now();
    const result = KnightsTravails([1, 1], [boardSize, boardSize], boardSize);
    // const result = output.map();
    const endTravails = performance.now();
    console.log(
      "KnightsTravails performance time for " +
        `${N}` +
        "x" +
        `${N}` +
        " board size: " +
        `${((endTravails - startTravails) / 1000).toFixed(
          2
        )} seconds - RESULT: `
    );
    console.log(result[1]);
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
      "KnightsTour performance time for " +
        `${N}` +
        "x" +
        `${N}` +
        " board size: " +
        `${((endTour - startTour) / 1000).toFixed(2)} seconds - RESULT: `
    );
    console.log(result);
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
      "KnightsTourWarnsdorff performance time for " +
        `${N}` +
        "x" +
        `${N}` +
        " board size: " +
        `${((endTour - startTour) / 1000).toFixed(2)} seconds - RESULT: `
    );
    console.log(result);
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
