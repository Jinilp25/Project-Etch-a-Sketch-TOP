function createNewGrid(grid_size) {
  const container = document.querySelector(".container");
  square_size = 600 / grid_size;

  for (let j = 0; j < grid_size; j++) {
    const row = document.createElement("div");
    for (let i = 0; i < grid_size; i++) {
      const square = document.createElement("div");
      square.style.width = `${square_size}px`;
      square.style.height = `${square_size}px`;
      square.classList.toggle("square");
      row.appendChild(square);
    }
    container.appendChild(row);
  }
}

function drawBoard(color) {
  const squares = document.querySelectorAll(".square");
  squares.forEach((bit) =>
    bit.addEventListener("mouseover", () => {
      bit.style.backgroundColor = color;
    })
  );
}

function clearBoard() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((bit) => {
    bit.style.backgroundColor = "wheat";
  });
}

function main() {
  // default mode
  const DEFAULTCOLOR = "violet";
  createNewGrid(16);
  drawBoard(DEFAULTCOLOR);

  const clearBtn = document.querySelector("#clear");
  const setSizeBtn = document.querySelector("#setSize");
  const sizeInput = document.querySelector("input");

  clearBtn.addEventListener("click", () => {
    clearBoard();
  });

  setSizeBtn.addEventListener("click", () => {
    const container = document.querySelector(".container");
    container.innerHTML = "";
    if (sizeInput.value > 100) {
      alert("Cannot set value over 100");
      createNewGrid(16);
      drawBoard(DEFAULTCOLOR);
    } else {
      createNewGrid(sizeInput.value);
      drawBoard(DEFAULTCOLOR);
    }
  });
}

main();
