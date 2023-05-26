//TASK 6-1
// let array=[];
// let n=parseInt(prompt("ENTER n: "))
// for (let i = 0; i < n; i++) {
//     let x=parseInt(prompt("ENTER number:"));
//     array.push(x);
// }
//
// for (let j = array.length-1; j >= 0; j--) {
//     console.log(array[j]+" ");
// }

// for(let i = 1; i < array.length; i++){
//     console.log(array[-i])
// }





//Task 6-2

// let array=[];
// let n=parseInt(prompt("ENTER n: "))
// for (let i = 0; i < n; i++) {
//     let x=parseInt(prompt("ENTER number:"));
//     array.push(x);
// }
//
// let max=array[0];
// for (let i=0;i<n;i++) {
//     if(max<array.at(i))
//         max=array.at(i);
// }
//
// alert(max);
//



//Task 6-3


// let array=[];
// let n=parseInt(prompt("ENTER n: "))
// for (let i = 0; i < n; i++) {
//     let x=parseInt(prompt("ENTER number:"));
//     array.push(x);
// }
//
// let sum=0;
// for (let i=0;i<array.length;i++) {
//     sum+=array.at(i);
// }
//
// alert(`SUM: ${sum}, AVG: ${sum/n}`);
//

//-----------------
//Task 6-4

// let array=[];
// let n=parseInt(prompt("ENTER n: "))
// for (let i = 0; i < n; i++) {
//     let x=parseInt(prompt("ENTER number:"));
//     array.push(x*x);
// }
// alert(array)


//--------------
//Task 6-5
// users = [
//
//     {login:"ilyas", password: "qwerty"},
//
//     {login:"eldar", password: "qqqqq"},
//
//     {login:"assylkhan", password: "qweqwe"},
//
//     {login:"anel", password: "asdasd"},
//
//     {login:"alibek", password: "aaaaaa"}
//
// ];
//
//
// let loginEnter=prompt("ENTER LOGIN:")
// let passwordEnter=prompt("ENTER PASSWORD:")
// let isFlag=false;
// for(let u of users){
//     if(u.login==loginEnter && u.password==passwordEnter){
//         alert("Welcome, you are authenticated ")
//         isFlag=true;
//         break
//     }
// }
//
// if(!isFlag)
//     alert("User not found")


//--------------
//Task 6-6

let books=[
    {name:"Зеленая миля",author:"Стивен Кинг",isbn:1434235,price:45},
    {name:"Искупление",author:"Иэн Макьюэн",isbn:1434235,price:25},
    {name:"Искупление 2:Завершение",author:"Иэн Макьюэн",isbn:1434236,price:35},
    {name:"Король былого и грядущего",author:"Теренс Уайт",isbn:1443,price:15},
    {name:"Крестный отец",author:"Марио Пьюзо",isbn:2335,price:35},
    {name:"Маленький принц",author:"Антуан де Сент-Экзюпери",isbn:1235,price:50},
    {name:"Мрачный жнец",author:"Антуан де Сент-Экзюпери",isbn:1235,price:75},
]

let autorEnter=prompt("Enter author:")
let text=""
for (let i = 0; i < books.length; i++) {
    if(books[i].author===autorEnter){
        text+=books[i].name +" - "+ books[i].author+" - "+books[i].isbn+" - "+books[i].price+"$"+"\n";
    }
}
alert(text);