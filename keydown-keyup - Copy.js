document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

let isKeyDown = false;

function handleKeyDown(event) {
  if (event.key === "Shift") {
    isKeyDown = true;
  }
}

function handleKeyUp(event) {
  if (event.key === "Shift") {
    isKeyDown = false;
  }
}

function handleKeyDown(event) {
    if (event.key === "Shift") {
      isKeyDown = true;
      document.body.style.backgroundColor = "red";
    }
  }
  
  function handleKeyUp(event) {
    if (event.key === "Shift") {
      isKeyDown = false;
      document.body.style.backgroundColor = "white";
    }
  }


  let isKeyup = false;

function handleKeyDown(event) {
  if (event.key === "Shift") {
    isKeyDown = true;
    document.body.style.backgroundColor = "blue";
  }
}

function handleKeyUp(event) {
  if (event.key === "Shift") {
    isKeyDown = false;
    document.body.style.backgroundColor = "white";
  }
}

document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);