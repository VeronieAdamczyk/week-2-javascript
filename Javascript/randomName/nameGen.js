////console.log("linked");
//
////array
//
//var lotteryArray= [];
//
//
////event listner for enter name
//
//var event1=document.getElementById("btn2").addEventListener('click', button1);
//
//// function for button 1
//
//function button1(){
//    
//    var userInput1=document.getElementById("guess").value;
//    
//    lotteryArray.push(userInput1);
//    
//    document.getElementById("lotteryNames").innerHTML=lotteryArray;
//    
//console.log(lotteryArray);
//
//}
//    // event listner for generate winner
//    
//    var event2=document.getElementById("btn3").addEventListener('click', button2);
// 
//    //generate winner function
//    
//function button2(){
//    
//    var random= lotteryArray[Math.floor(Math.random() * lotteryArray.length)];
//    
//    document.getElementById("result3").innerHTML= random + " Congratulations!! You Have Won!";
// 
//}
//    
//    
//
//var students=  new Object();
//
//students["firstName"]= "Veronie";
//students["Surname"]="Adamczyk";
//
//console.log(students);
//
//
//
//
////created a var to hold the students first name and return it.
//var firstNameProperty="firstName"

//console.log(students[firstNameProperty]);



//this is better practice- however the syntax parser will understand both

//console.log(students.firstName);
//console.log(students.Surname);
//
//
//students.address = new Object();
//
//students.address.doorNumber= 150;
//students.address.road= "Minories";
//students.address.postCode = "EC1 XYX";
//
//console.log(students.address);
//
//
////declaring and object
////whenever theb syntax parser sees the curly brackets it will be viewed as a new object
//var chocolate ={
//    
//    "brand": "Twix", 
//    "numberofBars": 2,
//    "colour": "Gold",
//    
//    prices:{
//    currency:"£",
//    country: "UK",
//    shop: "Tesco"
//
//}
// 
//}
//
//
//console.log(chocolate);
//
//console.log(chocolate.prices.currency);


//function greetings(){
//    
//    console.log("hi");
//}
//
//greetings.language="English";
//console.log(greetings.language);


var task1={

name: "veronie",
age : 25,
animals :"none",
  
car:{
brand:"vw",
make:"golf",
year:2016,
},
    
"ourFunction":function (){
    
    return task1.age;        

}
  
}

console.log(task1.car.brand + task1.car.brand + task1.car.year);

document.getElementById("result3").innerHTML= task1.car.brand +"<br>"+ task1.car.make+"<br>" + task1.car.year;



