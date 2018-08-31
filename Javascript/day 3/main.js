//console.log("linked");

//var cars=0;
//
//console.log("before start of loop");
//
//while(cars < 10){
//    console.log("during the loop");
//    console.log("number of cars " + cars);
//    cars++;
//}
//
//console.log("loop has ended");
//
//var boats = 0;
//
//do{
//    
//    console.log("amount of boats " + boats);
//    boats++;
//while(boats==2);
//}

//var numbers=0;
//
//while(numbers <= 9){
//    
//    numbers ++;
//    console.log(numbers);
//    document.getElementById("output").innerHTML +="<br>" + numbers;
//}


//var numbers2=0;
//
//do{
//    console.log(numbers2);
//    numbers2++;
//    document.getElementById("output").innerHTML+="<br>" + numbers2;
//}
//while(numbers2 <= 9);

//var number3=1;
//var number4=1;
//
//
//for (number3; number3<= 10; number3++){
//  
//    for(number4; number4 <=10; number4++){
//     
//        document.getElementById("output").innerHTML+=number4 +(", ");   
//    }
//    document.getElementById("output").innerHTML+=number3 +(", ");
//    
//}
//


//
//var i=1;
//var m=1;
//var count =0;
//var count2 =0;
//
//for(i; i<=10; i++){
//    
//    for(m; m <=10; m++){
//        
//        count=count + m +",";
//        console.log(count);
//    }
//    count2=count2 + i +",";
//    console.log(count2);
//}
//document.getElementById("output").innerHTML+=count +" " + count2;

//Alternative arry 
//var cars= new Array("ferrari", "lambo");
//console.log(cars);




//var newArray= [ "ferrari", "lambo" ,"VW" , "Porche"];
//console.log(newArray);
//
//
//
//var testArray = [1, "string" , true, null , undefined];
//console.log(testArray);





//var items = ["apples","bannas", "pears", "grapes"];
//
//console.log(items.shift());
//
//console.log(items);
//
//console.log(items.unshift("pineapple"));
//console.log(items);
//
//console.log(items.push("Lemon"));
//console.log(items);
//
//
//var a ="test1"
//var b ="test2"
//var c ="test3"
//
//
//items.push(a,b,c);
//
//console.log(items);


////task 1
//var new1=document.getElementById("button").addEventListener('click', task1);
//
//function task1(){
//
//    var testArray =[];
//    var userInput1= document.getElementById("input1").value;
//    var userInput2= document.getElementById("input2").value;
//    var userInput3= document.getElementById("input3").value;
//    
//    console.log(userInput1, userInput2, userInput3);
//    
//    testArray.push(userInput1, userInput2, userInput3);
//    
//    console.log(testArray);
//    
//    document.getElementById("output").innerHTML=testArray;
//  
//}
//
////task 2

//var new1=document.getElementById("button").addEventListener('click', task1);
//
//function task1(){
//
//    var testArray =[];
//    var userInput1= document.getElementById("input1").value;
//    var userInput2= document.getElementById("input2").value;
//    var userInput3= document.getElementById("input3").value;
//    
//    console.log(userInput1, userInput2, userInput3);
//    
//    testArray.push(userInput1, userInput2, userInput3);
//    
//    console.log(testArray);
//    
//    document.getElementById("output").innerHTML=testArray;
//    document.getElementById("output2").innerHTML=testArray.length;
//    console.log(testArray.length);
//}

//task 3
//var tArrayNew = ["I" , "like", "to", "eat" , "pizza"];

//add first

//tArrayNew.unshift("well");
//console.log(arrayNew);

//add last

//tArrayNew.push("!!!");
//console.log(arrayNew);

//remove first
//tArrayNew.shift();
//console.log(arrayNew);

//remove last

//tArrayNew.pop();
//console.log(arrayNew);




//task 4

//tArrayNew.splice(1,0, "really");
//
//console.log(arrayNew);
//document.getElementById("output").innerHTML=tArrayNew;

// task 5

//var test2 = ["i","am","getting",4,"puppies","for","christmas",8,"pushes","it"];
//
////console.log(test2);
//
//for (test2; test2.length; test2++){
//    console.log(test2);
//    
//    document.getElementById("output").innerHTML= test2;
//}


//task 6


var countries=["England", "France", "Italy", "Mexico", "Poland", "Russia" ,"China" ,"Greece", "Egypt" ,"India"];

var search1=document.getElementById("button").addEventListener('click', search2);

function search2(){
    
    
    var userInput1= document.getElementById("input1").value;
    
    console.log(userInput1);
    if(countries.includes(userInput1)){
        
         document.getElementById("output").innerHTML= userInput1 + " was found at postition " + countries.indexOf(userInput1, "England");
    }
    
    else{
        alert("Your country is not in thes list");
        
    }
    
   
}


