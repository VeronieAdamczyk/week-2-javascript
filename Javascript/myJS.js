// alert pops up messgae on screen
    //alert("javascript is linked");

// console displays output to the developer console
    console.log ("javascript is linked");

//String= "anything in speech marks"
//Numbers = 2
//Boolean = true/false
//null = state of confusion with value of null
//undefined = variable exists but no value assigned
//Object

//declaring variables

var name = "Veronie";
var salary; 
//
//
salary= 30000;
//
//
//console.log (name);
//console.log (salary);

/*function nameOfFunction(){
    var salary = 67000;
    console.log(name); 
}

console.log(nameOfFunction); */

// an example of retrieve

var dom = document.getElementsByClassName("testClass");
var dom1 = document.getElementById("test");

console.log(dom);
console.log(dom1);

/*function update(){
    
    dom1.get 
}*/

//an example of create

//Creating DOM content
var newHeading= document.createElement("h1");

newHeading.innerHTML = "Created in JS";

document.body.appendChild(newHeading);


//an example of update

//dom.innerHTML="changed through JS";
//console.log(dom);

dom1.innerHTML= "changed";

//return the title to our console
console.log(document.title);

//change title

document.title="completed";



var event1=document.getElementById("mainImage").addEventListener('click',nameOfFunction)

function nameOfFunction(){

   console.log("test that function is running");
    alert("You clicked the image");
    
}





var event2=document.getElementById("button1").addEventListener('click',buttonClick);


function buttonClick(){
    
    //alert("Button has been clicked");
    
   var userInput=document.getElementById("input1").value;
    console.log(userInput);
    
    document.getElementById("test").innerHTML= userInput;
    
}

//var event3=document.getElementById("button2").addEventListener('click',buttonClick2);
//
//function buttonClick2(){
//    var userInput2=document.getElementById("input2").value;
//    console.log(userInput2);
//    alert("button clicked")
    
 

var event2=document.getElementById("button1").addEventListener('click',addNumber);
    
    function addNumber(){
        var userInput1 =document.getElementById("input1").value;
        var userInput2 =document.getElementById("input2").value;
        
        var sum= parseInt( userInput1) + parseInt(userInput2);
        
        console.log(sum);
        
        document.getElementById("add").innerHTML= sum;
        
    }


