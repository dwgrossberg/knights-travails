import KnightsTravails from "./KnightsTravails";
import KnightsTour from "./KnightsTour";
import KnightsTourWarnsdorff from "./KnightsTourWarnsdorff";
import KnightIcon from "../assets/knight.png";

// Simple module to play with different board sizes and results

const displayController = (() => {
  // variable to hold boardSize
  let N = 6;

  // variables to hold x & y coords
  let xCoord;
  let yCoord;

  const updateN = (newN) => {
    N = newN;
  };

  const boardDOM = document.getElementById("board");
  const boardRange = document.getElementById("myRange");
  let squares;

  // set slider to start
  boardRange.value = 6;
  const updateBoardSize = () => {
    removeBoard();
    updateN(boardRange.value);
    renderBoard();
    squares.forEach((s) => {
      s.style.height = 300 / `${boardRange.value}` + "px";
      s.style.width = 300 / `${boardRange.value}` + "px";
    });
    document.getElementById("board-size").textContent =
      boardRange.value + " x " + boardRange.value;
    document.getElementById("Knight-img-image").style.opacity = "1";
  };
  boardRange.addEventListener("input", updateBoardSize);

  const renderBoard = () => {
    let counter = 1;
    for (let i = 0; i < N; i++) {
      const row = document.createElement("div");
      row.classList.add("row");
      for (let j = 0; j < N; j++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.dataset.num = counter;
        counter++;
        square.style.height = 300 / `${boardRange.value}` + "px";
        square.style.width = 300 / `${boardRange.value}` + "px";
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
    squares = Array.from(document.getElementsByClassName("square"));
    squares.forEach((s) => {
      s.addEventListener("mousedown", () => {
        placeKnight(s);
      });
    });
  };
  renderBoard();

  const removeBoard = () => {
    while (boardDOM.firstChild) {
      boardDOM.removeChild(boardDOM.lastChild);
    }
  };

  const getRandomNumberUpTo = (max) => {
    return Math.floor(Math.random() * (max - 1 + 1) + 1);
  };

  const placeKnight = (spot) => {
    if (document.getElementById("icon")) {
      document.getElementById("icon").parentElement.style.backgroundColor = "";
      document.getElementById("icon").remove();
    }
    const knightIcon = document.getElementById("Knight-img-image");
    let transform = " rotateX(180deg)";
    const icon = document.createElement("img");
    icon.setAttribute("id", "icon");
    icon.src = KnightIcon;
    icon.style.transform += transform;
    icon.style.height = 300 / N + "px";
    icon.style.width = 300 / N + "px";
    spot.style.backgroundColor = "cadetblue";
    spot.appendChild(icon);
    knightIcon.style.opacity = "0";
    knightIcon.style.cursor = "default";
  };

  const randomlyPlace = () => {
    const randomSpot = getRandomNumberUpTo(N * N);
    const spot = document.querySelector(`[data-num="${randomSpot}"]`);
    placeKnight(spot);
  };
  const randomlyPlaceDOM = document.getElementById("randomly-place");
  randomlyPlaceDOM.addEventListener("mousedown", randomlyPlace);

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
