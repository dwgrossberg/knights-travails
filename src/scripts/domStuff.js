import KnightsTravails from "./KnightsTravails";
import KnightsTour from "./KnightsTour";
import KnightsTourWarnsdorff from "./KnightsTourWarnsdorff";

const displayController = (() => {
  const getRandomNumberUpTo = (max) => {
    return Math.floor(Math.random() * ((max || 8) - 4 + 1) + 4);
  };

  const runKnights = (boardSize) => {
    console.log("hi");
    KnightsTravails(
      getRandomNumberUpTo(boardSize),
      getRandomNumberUpTo(boardSize),
      boardSize
    );
    KnightsTour(
      getRandomNumberUpTo(boardSize),
      getRandomNumberUpTo(boardSize),
      boardSize
    );
    KnightsTourWarnsdorff(
      getRandomNumberUpTo(boardSize),
      getRandomNumberUpTo(boardSize),
      boardSize
    );
  };

  KnightsTravails(1, 1, 8);

  return {
    runKnights,
  };
})();

export default displayController;
