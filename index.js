const battleship = () => {
  let player1 = {
    name: ' ',
    shipCount: 0,
    gameBoard: [
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
               ],
  };

  let player2 = {
    name: ' ',
    shipCount: 0,
    gameBoard: [
                 [0, 0, 0, 0],
                 [0, 0, 0, 0],
                 [0, 0, 0, 0],
                 [0, 0, 0, 0],
                ],
  };

  player1.name = prompt("Enter first Player name");
  player2.name = prompt("Enter Second Player name");

  //loop runs until 4 ships been added to the board
  //Generate random x,y coordination (Loop then through four ships)
  //if statement checks if coordinates has a ship or not, then if not adds a ship
  const addShips = (player) => {
    while (player.shipCount < 4) {
      let xRandCoordinate = Math.floor(Math.random() * 4);
      let yRandCoordinate = Math.floor(Math.random() * 4);

      if (player.gameBoard[xRandCoordinate][yRandCoordinate] === 0) {
        player.gameBoard[xRandCoordinate][yRandCoordinate] = 1;
        console.log(player.name," ",xRandCoordinate, yRandCoordinate)
        player.shipCount++;
      }
    }
  };

  //call "addShips" functions for the two players, and allocate the 4 ships for each.
  addShips(player1);
  addShips(player2);

  //this function: asks the player(who is playing his turn) to enter x, y cordination 
  //check if the selected coordinations has a ship, if yes decrease # ships and alert with hit
  //if there is no ship, alert "Miss" only
  const hitShips = (player) => {
    let xCoordinator = parseInt(prompt("Enter X coordinate value(must be between 0-3)" ));
    let yCoordinator = parseInt(prompt("Enter y coordinate value(must be between 0-3)" ));

    if (player.gameBoard[xCoordinator][yCoordinator] === 1) {
      player.shipCount--;
      alert("Hit!");
      player.gameBoard[xCoordinator][yCoordinator] = 0;
    } else {
      alert("Miss!");
    }
  };

  // loop switches between players 1 and 2, until one of the players wins.
  //checking on ship count while playing
  //
  while (player1.shipCount !== 0 && player2.shipCount !== 0) {
    console.log("player2", player2.shipCount)

    alert(`Now, it is ${player1.name} round`);
    hitShips(player2);
    if (player2.shipCount === 0) {
      alert(` ${player1.name} Win!!!!`);
      return (` ${player1.name} Win!!!!`);
    }

    alert(` Now, It is ${player2.name} round`);
    hitShips(player1);

    if (player1.shipCount === 0) {
      alert(` ${player2.name} Win!!!!`);
      return (` ${player2.name} Win!!!!`);
    }
  }
  
};

const gameResult = battleship();

const htmlTarget = document.getElementById("result");
htmlTarget.innerHTML = gameResult;