
// Get the dice element
var diceElement = document.getElementById("dice");

// Add event listener to change the transform when clicked
diceElement.addEventListener("click", function() {
  

    // Generate a random integer from 0 to 10
    rNo1 = Math.floor(Math.random() * 20);
    rNo2 = Math.floor(Math.random() * 30);
    rNo3 = Math.floor(Math.random() * 25);


    // Change the parameters of the transform
    diceElement.style.transform = 
    `rotateX(${90*rNo1}deg) rotateY(${90*rNo2}deg) rotateZ(${90*rNo3}deg)`;

    console.log(rNo1, rNo2,rNo3)
});