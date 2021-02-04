// <!-- 
// ## JavaScript / DOM Practice

// We are going to make a maze game. We're going to do the following:

// 1. Give the user an input box and a start button
// 2. The user will enter a number and then when the start button is clicked the following will happen
//    1. The input and button will be removed or hidden
//    2. X number of black boxes will appear in random places on the screen (X being the number they entered)
//    3. One green box will appear and One red box will appear
// 3. When the user's cursor enters the green box, the game will start
// 4. The user will then have to move their cursor to the red box without hitting any black boxes.
// 5. If the user hits a black box, display a game lost message, if they do not, display a game won message -->

// Steps: 1. Add button and a form of input
// 2. Add event listener to the button which: 1) Hide input / button 2) Create the black divs with a for loop 
// 3) Add classes to divs 4) Add random px from top and left 5) Add event listener to end game if it has been started
// 6) Append black divs to the page 7) Add green div with event listener to start game 8) red div with e.l. to end game if still active
// 3. When game ends, allow player to play again

var start = document.getElementById("Start");
start.remove();("")

var boxNumber = document.getElementById("boxNumber");
boxNumber.remove();("")