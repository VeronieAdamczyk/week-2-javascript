//var event1 = document.getElementById("button").addEventListener('click', gradeMsg);
//
//function gradeMsg(){
//    
//var grade= document.getElementById("input").value;
//        
//var msg;
//
//var capGrade=grade=grade.toLocaleUpperCase();
//    
//switch(capGrade){
//   
//    case "A": msg= "Distinction! Well done";   
//    break;
//    case "B": msg="Merit! Well Done";
//    break; 
//    case "C": msg="Pass! You did it";
//    break;
//    case "D": msg="Pass! well done";
//    break;
//    case "E": msg="Pass! Just about passed";
//    break;
//    case "F": msg="Fail";
//    break; 
//    default: msg="result undetermined";
//            }
//
//console.log(grade);
//console.log(msg);
//    
//document.getElementById("display").innerHTML=msg;
//    
//}
//
//


//var houses;
//
//for(houses= 0; houses<10; houses++){
//    
//    console.log("current number of houses" + houses);
//}
//
//function loop1(){
//var numbers;
//
//for(numbers=50; numbers>=50; numbers --){
//    document.getElementById("display").innerHTML += "<br>" + numbers;
//    console.log("number" + numbers);
//}
//}
//
//loop1();


function loop2(){
    
    var number2;
    for(number2=1; number2 <=30; number2++){
    document.getElementById("display").innerHTML+="<br>" + number2;
    
    if (number2 %2==0){
    console.log(number2+ " " +"even");
    }
    else {
    console.log(number2+ " " +"odd")
    }
    }
    

}



loop2()






