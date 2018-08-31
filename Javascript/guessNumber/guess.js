//console.log("hello world");

//random number generator

var randomGen = Math.floor(Math.random()* 101);
console.log(randomGen);


// Creating user input


var event1=document.getElementById("btn2").addEventListener('click', button1);


var count =1;

function button1(){
    
    var userInput1=document.getElementById("guess").value;
    
    
    console.log(userInput1);
    
    
    if (userInput1 === randomGen){
    
        document.getElementById("result3").innerHTML=("You guessed it!! It took you " + count  + (" guesses. Reload to start again"));
        
    }
    
    else if (userInput1 > randomGen){
        document.getElementById("result3").innerHTML=("Too big. Guess Again");
        count++;
    }
    
    else {
        document.getElementById("result3").innerHTML=("Too small. Guess again");
        count++;
    }
    
}






//array to store guesses

