function newImage(url, left, bottom) {
  let object = document.createElement("img");
  object.src = url;
  object.style.position = "fixed";
  object.style.left = left + "px";
  object.style.bottom = bottom + "px";
  document.body.append(object);
  return object;
}

function newItem(url, left, bottom) {
  let item = newImage(url, left, bottom);
  document.body.append(item);
}

function newInventory(_url, _left, _bottom) {
  let inventory = document.createElement("div");
  inventory.style.position = "fixed";
  inventory.style.bottom = "0px";
  inventory.style.left = "0px";
  inventory.style.width = "100%";
  inventory.style.height = "100px";
  inventory.style.display = "flex";
  inventory.style.flexDirection = "row";
  inventory.style.alignItems = "center";
  inventory.style.justifyContent = "space-evenly";
  inventory.style.border = "0.5em solid black";
  inventory.style.backgroundColor = "brown";
  document.body.append(inventory);
}

function move(element) {
    element.style.position = "fixed";
}
    function moveToCoordinates(left, bottom) {
        element.style.left = left + "px";
        element.style.bottom = bottom + "px";
    }


function moveWithArrowKeys(left, bottom, callback) {
  let direction = null
  let x = left
  let y = bottom

  element.style.left = x + "px"
  element.style.bottom = y + "px"

  function moveCharacter() {
    if (direction === "west") {
      x -= 1
    }
    if (direction === "north") {
      y += 1
    }
    if (direction === "east") {
      x += 1
    }
    if (direction === "south") {
      y -= 1
    }
  }
    setInterval(moveCharacter, 1) //setInterval 
    
  const character = newImage('assets/green-character/static.gif')

  function handleDirectionChange(direction){
      if(direction === null){
          character.src = 'assets/green-character/static.gif'
      }
      if(direction === 'west'){
          character.src = 'assets/green-character/west.gif'
      }
      if(direction === 'north'){
          character.src = 'assets/green-character/north.gif'
      }
      if(direction === 'east'){
          character.src = 'assets/green-character/east.gif'
      }
      if(direction === 'south'){
          character.src = 'assets/green-character/south.gif'
      }
  }
  
  move(character).withArrowKeys(100, 250, handleDirectionChange)
  document.addEventListener("keydown", function (e) {
    if (e.repeat) return

    if (e.key === "ArrowLeft") {
      direction = "west"
    }
    if (e.key === "ArrowUp") {
      direction = "north"
    }
    if (e.key === "ArrowRight") {
      direction = "east"
    }
    if (e.key === "ArrowDown") {
      direction = "south"
    }
      callback(direction)
  })

  document.addEventListener("keyup", function(_e) {
      direction = null;
      callback(direction)
  });
}

newInventory();
newImage("assets/green-character.gif", 100, 250);
newImage("assets/tree.png", 200, 450);
newImage("assets/pillar.png", 350, 250);
newImage("assets/pine-tree.png", 450, 350);
newImage("assets/crate.png", 150, 350);
newImage("assets/well.png", 500, 575);

newItem("assets/sword.png", 500, 555);
newItem("assets/shield.png", 165, 335);
newItem("assets/staff.png", 600, 250);




const character = newImage("assets/green-character/static.gif");

let direction = null;
let x = 100;
let y = 250;

setInterval(function () {
   if (direction === "west") {
     x = x - 1;
  }
  if (direction === "north") {
    y = y + 1;
 }
  if (direction === "east") {
    x = x + 1;
  }
  if (direction === "south") {
    y = y - 1;
  }
  character.style.left = x + "px";
character.style.bottom = y + "px";
}, 1);


document.addEventListener("keydown", function (e) {
  if (e.repeat) return

  if (e.key === "ArrowLeft") {
    direction = "west"
  }
  if (e.key === "ArrowUp") {
    direction = "north"
  }
  if (e.key === "ArrowRight") {
    direction = "east"
  }
  if (e.key === "ArrowDown") {
    direction = "south"
  }
})

document.addEventListener("keyup", function (_e) {
  direction = null;
})



function moveCharacter() {
  if (direction === "west") {
    x = x - 1;
  }
  if (direction === "north") {
    y = y + 1;
  }
  if (direction === "east") {
    x = x + 1;
  }
  if (direction === "south") {
    y = y - 1;
  }
  character.style.left = x + "px";
    character.style.bottom = y + "px";
}
move(character).to(100, 250)
