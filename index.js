
function playGame() {
    // create a variable that contains the value inside the text box
    const playerName = document.querySelector("input").value

    // set the inner content of the first P tag (player 1)
    document.querySelector(".dice p").innerHTML = playerName

    let randomNumber1 = Math.random()
    // Multiply the result of Math.random by maximum range value (6 here since that's the highest number on a dice)
    // Add 1 to ensure you do not get a value of 0
    var result = Math.floor(randomNumber1 * 6) + 1

    // alternatively:
    randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

    var randomImageSource = "images/dice" + randomNumber1 + ".png"; //images/dice1.png - images/dice6.png

    //picking the first image in the document
    const image1 = document.querySelectorAll("img")[0];

    //set src for image1 to the randomly selected image above(change initial image in html document)
    image1.setAttribute("src", randomImageSource);

    //Repeat process above for player2
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;

    const randomImageSource2 = "images/dice" + randomNumber2 + ".png";

    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


    //If player 1 wins
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = playerName + " Wins! 🚩";
    }
    else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    }
    else {
        document.querySelector("h1").innerHTML = "Draw!";
    }

}

