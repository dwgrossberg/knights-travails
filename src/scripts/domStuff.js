import KnightsTravails from "./KnightsTravails";
import KnightsTour from "./KnightsTour";
import KnightsTourWarnsdorff from "./KnightsTourWarnsdorff";

const displayController = (() => {
  const getRandomNumberUpTo = (max) => {
    return Math.floor(Math.random() * ((max || 8) - 4 + 1) + 4);
  };

  const runKnights = (boardSize) => {
    const startTravails = performance.now();
    KnightsTravails(
      getRandomNumberUpTo(boardSize),
      getRandomNumberUpTo(boardSize),
      boardSize
    );
    const endTravails = performance.now();
    console.log(
      "KnightsTravails performance time: " +
        `${((endTravails - startTravails) / 1000).toFixed(2)} seconds`
    );

    const startTour = performance.now();
    KnightsTour(
      getRandomNumberUpTo(boardSize),
      getRandomNumberUpTo(boardSize),
      boardSize
    );
    const endTour = performance.now();
    console.log(
      "KnightsTour performance time: " +
        `${((endTour - startTour) / 1000).toFixed(2)} seconds`
    );

    const startTourW = performance.now();
    KnightsTourWarnsdorff(
      getRandomNumberUpTo(boardSize),
      getRandomNumberUpTo(boardSize),
      boardSize
    );
    const endTourW = performance.now();
    console.log(
      "KnightsTravailsW performance time: " +
        `${((endTourW - startTourW) / 1000).toFixed(2)} seconds`
    );
  };

  return {
    runKnights,
  };
})();

export default displayController;
