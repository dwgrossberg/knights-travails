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
  let xCoord_START;
  let yCoord_START;

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
        const test = arrayToXY(s);
        console.log(test, xyToArray(test));
        const coords = arrayToXY(s);
        xCoord = coords[0];
        yCoord = coords[1];
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

  // turn 1-D array into [x, y] coords
  const arrayToXY = (square) => {
    return [
      square.dataset.num % N === 0 ? Number(N) : square.dataset.num % N,
      Math.round(Math.ceil(Number(square.dataset.num) / N)),
    ];
  };

  // turn [x, y] coords into 1-D array
  const xyToArray = (coord) => {
    return coord[1] * N + coord[0] - N;
  };

  const getRandomNumberUpTo = (max) => {
    return Math.floor(Math.random() * (max - 1 + 1) + 1);
  };

  const knightIcon = document.getElementById("Knight-img-image");
  const placeKnight = (spot) => {
    if (document.getElementById("icon")) {
      document.getElementById("icon").parentElement.style.backgroundColor = "";
      document.getElementById("icon").remove();
    }
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
    const coords = arrayToXY(spot);
    xCoord = coords[0];
    yCoord = coords[1];
    placeKnight(spot);
  };
  const randomlyPlaceDOM = document.getElementById("randomly-place");
  randomlyPlaceDOM.addEventListener("mousedown", randomlyPlace);

  const dragAndDrop = () => {
    boardDOM.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    boardDOM.addEventListener("drop", (e) => {
      const coords = arrayToXY(e.target);
      xCoord = coords[0];
      yCoord = coords[1];
      placeKnight(e.target);
    });
  };
  dragAndDrop();

  const travailKnight = (boardSize) => {
    console.log(
      xCoord,
      yCoord,
      xCoord_START,
      yCoord_START,
      [xCoord, yCoord] !== [xCoord_START, yCoord_START]
    );

    if (xCoord && yCoord) {
      xCoord_START = xCoord;
      yCoord_START = yCoord;
      xCoord = undefined;
      yCoord = undefined;
      document.getElementById("display-info").innerText =
        "Choose an ending square for the Knight";
    }
    if (
      xCoord &&
      yCoord &&
      xCoord_START &&
      yCoord_START &&
      [xCoord, yCoord] !== [xCoord_START, yCoord_START]
    ) {
      console.log(xCoord, yCoord, xCoord_START, yCoord_START);
      const startTravails = performance.now();
      const result = KnightsTravails(
        [xCoord_START, yCoord_START],
        [xCoord, yCoord],
        Number(boardSize)
      );
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
    }
  };
  const travailKnightDOM = document.getElementById("travail-Knight");
  travailKnightDOM.addEventListener("mousedown", () => {
    travailKnight(N);
  });

  const tourKnight = (boardSize) => {
    const startTour = performance.now();
    const result = KnightsTour(1, 1, Number(boardSize));
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
    const result = KnightsTourWarnsdorff(1, 1, Number(boardSize));
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
