//Task 7-1
// array=[]
// let n=parseInt(prompt("ENTER n:"))
// for (let i = 0; i < n; i++) {
//     let x=parseInt(prompt("ENTER NUMBER:"))
//     array.push(x);
// }
// let isFlag=false
// let m=parseInt(prompt("ENTER m"))
// for (let i = 0; i < array.length; i++) {
//     if(array.indexOf(m)>=0){
//         alert("YES, index: "+array.indexOf(m))
//         isFlag=true
//         break
//     }
// }
//
// if(isFlag==false){
//     alert("NO")
// }



//------------------
//Task 7-2
//-----------------
// array=[]
// let sum =1
// while (true) {
//     let n=parseInt(prompt("ENTER n:"))
//     if(n===0){
//         break
//     }
//     array.push(n);
// }
//
// for (let i = 0; i < array.length; i++) {
//     sum*=array[i];
// }
// alert(sum)
// let geo=Math.pow(sum,1/array.length).toFixed(3)
// alert(geo)



//-------------------/
//Task 7-3

// array=[]
// let sum =1
// while (true) {
//     let n=parseInt(prompt("ENTER n:"))
//     if(n===0){
//         break
//     }
//     array.push(n);
// }
//
// let positiveArr=[]
// for (let i = 0; i < array.length; i++) {
//     if(array[i]>0)
//         positiveArr.push(array[i])
// }
// alert(positiveArr)


//Task 7-4
// let array=[]
// let n=parseInt(prompt("ENTER n: "))
// for (let i = 0; i < n; i++) {
//     let number =parseInt(prompt("Enter number:"))
//     array.push(number)
// }
// let sum=1
// for (let i = 0; i < array.length; i++) {
//     if(array[i] !== 0){
//         sum*=array[i]
//     }
// }
// alert(sum)



//---------------
//Task 7-5
// cars = [
//
//     {"name":"Toyota", "price": 12000000, "year": 2015, "volume": 2.2},
//
//     {"name":"Mercedes", "price": 70000000, "year": 2018, "volume": 3.8},
//
//     {"name":"Toyota", "price": 7000000, "year": 2013, "volume": 2.0},
//
//     {"name":"BMW", "price": 11000000, "year": 2011, "volume": 3.0},
//
//     {"name":"Lexus", "price": 60000000, "year": 2017 ,"volume": 5.7}
//
// ];
//
// while (true){
//     let txt="";
//     let choose=parseInt(prompt("INSERT [1] TO SEARCH BY NAME\n" +
//         "\n" +
//         "INSERT [2] TO SEARCH BY YEAR\n" +
//         "\n" +
//         "INSERT [3] TO SEARCH BY ENGINE VOLUME\n" +
//         "\n" +
//         "INSERT [4] TO SEARCH BY PRICE\n" +
//         "\n" +
//         "INSERT [5] TO EXIT"))
//
//     if(choose===1){
//         let carName=prompt("INSERT NAME OF CAR:");
//         for (let i = 0; i < cars.length; i++) {
//             if(carName===cars[i].name){
//                 txt+=cars[i]["name"] + " - " + cars[i]["price"]+" - " + cars[i]["year"]+ " - " + cars[i]["volume"]+" liters\n"
//             }
//         }
//         alert(txt)
//     }
//     else if(choose===2){
//         let fromYear=parseInt(prompt("INSERT YEAR START FROM:"))
//         let endYear=parseInt(prompt("INSERT YEAR ENDS FROM:"))
//         for (let i = 0; i < cars.length; i++) {
//             if(cars[i].year>=fromYear&&cars[i].year<=endYear){
//                 txt+=cars[i]["name"] + " - " + cars[i]["price"]+" - " + cars[i]["year"]+ " - " + cars[i]["volume"]+" liters\n"
//             }
//         }
//         alert(txt)
//     }
//     else if(choose===3){
//         let fromEngine=parseInt(prompt("INSERT Engine START FROM:"))
//         let endEngine=parseInt(prompt("INSERT Engine ENDS FROM:"))
//         for (let i = 0; i < cars.length; i++) {
//             if(cars[i].volume>=fromEngine&&cars[i].volume<=endEngine){
//                 txt+=cars[i]["name"] + " - " + cars[i]["price"]+" - " + cars[i]["year"]+ " - " + cars[i]["volume"]+" liters\n"
//             }
//         }
//         alert(txt)
//     }
//     else if(choose==4){
//         let fromPrice=parseInt(prompt("INSERT Price START FROM:"))
//         let endPrice=parseInt(prompt("INSERT Price ENDS FROM:"))
//         for (let i = 0; i < cars.length; i++) {
//             if(cars[i].price>=fromPrice&&cars[i].price<=endPrice){
//                 txt+=cars[i]["name"] + " - " + cars[i]["price"]+" - " + cars[i]["year"]+ " - " + cars[i]["volume"]+" liters\n"
//             }
//         }
//         alert(txt)
//     }
//     else if(choose==0){
//         break;
//     }
// }


let array=[]
while(true){
    let choose=parseInt(prompt("PRESS 1 TO ADD STUDENT\n" +
        "PRESS 2 TO LIST STUDENT\n" +
        "PRESS 0 TO EXIT\n"))

    if(choose===1){
        let name=prompt("INSERT NAME:")
        let surname=prompt("INSERT SURNAME:")
        let gpa=parseFloat(prompt("INSERT GPA:"))
        let user = {
            "name": name,
            "surname": surname,
            "gpa": gpa
        };
        array.push(user)
    }
    else if(choose===2){
        let txt=""
        for (let i = 0; i < array.length; i++) {
            txt+=array[i].name+" - "+array[i].surname+" - "+array[i].gpa+"\n"
        }
        alert(txt)
    }
    else if(choose===0){
        break
    }

}