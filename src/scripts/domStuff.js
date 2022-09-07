import KnightsTravails from "./KnightsTravails";
import KnightsTour from "./KnightsTour";
import KnightsTourWarnsdorff from "./KnightsTourWarnsdorff";

const displayController = (() => {
  const getRandomNumberUpTo = (max) => {
    return Math.floor(Math.random() * ((max || 8) - 4 + 1) + 4);
  };

  const travailKnight = (boardSize) => {
    const startTravails = performance.now();
    KnightsTravails([1, 1], [boardSize, boardSize], boardSize);
    const endTravails = performance.now();
    console.log(
      "KnightsTravails performance time: " +
        `${((endTravails - startTravails) / 1000).toFixed(2)} seconds`
    );
  };

  const tourKnight = (boardSize) => {
    const startTour = performance.now();
    KnightsTour(1, 1, boardSize);
    const endTour = performance.now();
    console.log(
      "KnightsTour performance time: " +
        `${((endTour - startTour) / 1000).toFixed(2)} seconds`
    );
  };

  const tourKnightWarnsdorff = (boardSize) => {
    const startTour = performance.now();
    KnightsTourWarnsdorff(1, 1, boardSize);
    const endTour = performance.now();
    console.log(
      "KnightsTourWarnsdorff performance time: " +
        `${((endTour - startTour) / 1000).toFixed(2)} seconds`
    );
  };

  return {
    travailKnight,
    tourKnight,
    tourKnightWarnsdorff,
  };
})();

export default displayController;
