//task 5-1

// let x = parseInt(prompt("Insert a number:"));
// alert(x*x+2*x-1);

//------------------------
//Task 5-2
//-----------------------

// let a = parseInt((prompt("insert number a :")));
// let b = parseInt((prompt("insert number b :")));
// if(a%b==0){
//     alert("Divisible");
// }else alert("Not Divisible");

//-------------
//Task 5-3
//---------------
// let name=prompt("insert name");
// let surname=prompt("insert surname");
// let city=prompt("insert city");
// let age=parseInt(prompt("insert age"));
//
// alert("Name: "+ name+"\n"+"Name: "+ surname+"\n"+"City: "+ city+"\n"+"Age: "+age);


//--------------Task 5-4
// let a=parseInt(prompt("insert a"));
// let b=parseInt(prompt("insert b"));
// let c=parseInt(prompt("insert c"));
//
//
// alert("a + b + c ="+(a+b+c)+"\n"+ "a – b – c ="+(a-b-c)+"\n"+"a * b * c ="+(a*b*c));

//------------------------
//Task 5-5

// let n=parseInt(prompt("insert n"));
// let k=parseInt(prompt("insert k"));
//  alert(parseInt(k/n));

 //-------------------
 //Task 5-6
//--------------------

// let a=parseInt(prompt("insert a"));
// let b=parseInt(prompt("insert b"));
// alert("c="+Math.sqrt(a*a+b*b));

//-------------------
//Task 5-7
//-----------------
//
// let v=parseInt(prompt("insert Speed in km/h"));
// let S=parseInt(prompt("insert Distance in km/h"));
// let t = (S/v)*60;
// let timeToReach=135;
// if(t>timeToReach){
//     alert("NO, YOU CAN NOT REACH")
// }else
//     alert("YES, YOU CAN REACH");

//----------------------
//Task 5-8
//----------------------

// let n = parseInt(prompt("Insert count:"));
// let cost=n*120;
// if(cost>4000){
//     alert(cost*0.9+" KZT");
// }else alert(cost+" KZT")
//

//----------
//Task 5-9

// let n= prompt("INSERT YOUR AMOUNT IN KZT:\n" +
//     "\n" +
//     "1- CONVERT TO USD\n" +
//     "\n" +
//     "2- CONVERT TO EUR\n" +
//     "\n" +
//     "3- CONVERT TO GBP");
//
// let items=n.split(" ");
//
// items[1] = parseInt(items[1])
// items[0] = parseInt(items[0])
//
// if(items[1]==1){
//     alert((items[0]/380).toFixed(2)+" USD");
// }else if(items[1]==2)
//     alert((items[0]/430).toFixed(2)+" EUR")
// else if (items[1]==3)
//     alert((items[0]/480).toFixed(2)+" GBP")


//----------
//Task 5-10
//------
// let auth=prompt("Insert login and surname");
// items=auth.split(" ");
// if(items[0]==="user" && items[1]==="qwerty"){
//     alert("Authentication completed");
// }
// else alert("Invalid login or password");

//Task 5-11

// let year = parseInt(prompt("inset year:"));
// if((year%4==0&&year%100)||year%400==0)
//     alert("YES");
// else alert("NO");


//TASK 5-12

// let grade=parseInt(prompt("Insert grade:"));
//
// if(grade>=90)
//     alert("A");
// else if(grade>=75)
//     alert("B");
// else if(grade>=60){
//     alert("C");
// }
// else if(grade>=50){
//     alert("D");
// }
// else alert("F");
//
//--------------
//Task 5-13
//---------------
// let choose1=parseInt(prompt("Choose your branch:\n" +
//     "\n" +
//     "1 - Science, 2 - Humanitarian subjects, 3 - Art, 4 - Sport:"));
//
// if(choose1===1){
//     let choose2=parseInt(prompt("1 - Math, 2 - Physics:"))
//     if(choose2===1){
//         alert("You are Financier");
//     }else {
//         alert("You are Engeener");
//     }
// }
// else if(choose1===2){
//     choose2=parseInt(prompt("1 - History, 2 - Foreign Languages:"))
//     if(choose2===1){
//         alert("You are Historic or Diplomat ");
//     }else alert("You are Translator  ")
// }
// else if(choose1===3){
//     choose2=parseInt(prompt("1 - Drawing, 2 -Singing:"))
//     if(choose2===1){
//         alert(" You are Painter or Architect");
//     }else alert("You are Singer or Tamada ")
//
// }
// else if(choose1===4){
//     choose2=parseInt(prompt("1 - Team, 2 - Individual:  "))
//     if(choose2===1){
//         alert(" You are footballer or Basketball player");
//     }else alert("You are boxer or tennis player ")
//
// }
//
//


//Task 5-14

// let a =parseInt(prompt("Insert a:"))
// let b =parseInt(prompt("Insert b:"))
// let c =parseInt(prompt("Insert c:"))
//
// if((a<(b+c)) && (b<(a+c)) && (c<(a+b))){
//     alert("YES");
// }
// else alert("NO");

//Task 5-15

let tenge=parseInt(prompt("ENTER TENGE"));

if(tenge%380!=0){
    let toDollar= parseInt(tenge/380);
    let toCent = parseInt((tenge-toDollar*380)/3.8)
    alert(`${toDollar} USD and ${toCent} cents`);
}else alert("ONLY "+tenge/380+" USD")


//Task 5-16

// let minute=parseInt(prompt("Enter minute: "));
// if(minute%60==0){
//     alert(`ONLY ${minute/60} HOURS`)
// }
// else{
//     toHours=parseInt(minute/60);
//     alert(`${toHours} HOURS and ${minute-toHours*60} MINUTES`)
// }


