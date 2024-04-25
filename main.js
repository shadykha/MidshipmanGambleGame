
var rotationC = [[1, 4, 2, 3],      // this is the rotions coordinate around x and y axis
                 [6, 3, 5,4],       // first row is when the cube rotate 0 deg around x-axis 
                  [2, 3, 1,4],      // and each elemant in the first raw represent the angles
                   [5, 4, 6, 3]];   //  0 90 180 270 each raw is the same idea.
                                    // the reason row 2 and 4 have one number is because their
                                    // plan is perpendicular to the y-axis

var diceValue      



// Get the dice element
var diceElement = document.getElementById("dice");

// Add event listener to change the transform when clicked
diceElement.addEventListener("click", function() {
  

    
    // Generate a random integer from 0 to 10
    rNo1 = Math.floor(Math.random() * 20);
    rNo2 = Math.floor(Math.random() * 30);
    rNo3 = Math.floor(Math.random() * 25);


    // Change the parameters of the transform
    /*
    the angles in which the cube rotate are multiple of 90
    and it only rotate around x and y axis. since we know 
    the number of rotations around each axis and the faces
    of the cube doesn't change we can get the value of the
    dice. i did it by trying to rotate the cube with all 
    the possible rotaions they are only 16 possiblity.
    we only have 4 angles 0 90 180 270 . i don't know if 
    there is another a smarter way! 
    */
    index_X = (rNo1) % 4;
    index_Y = (rNo2) % 4;
    index_Z = (rNo3) % 4;


    if (index_X === 1 || index_X === 3){
        
        diceElement.style.transform = 
        `rotateX(${90*rNo1}deg) rotateY(${90*0}deg) rotateZ(${90*rNo3}deg)`;
        diceValue = rotationC[index_X][index_Z];

    }else{

        diceElement.style.transform = 
        `rotateX(${90*rNo1}deg) rotateY(${90*rNo2}deg) rotateZ(${90*0}deg)`;
        diceValue = rotationC[index_X][index_Y];

    }
    
    

    console.log(diceValue)
});