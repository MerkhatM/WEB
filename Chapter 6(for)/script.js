//TASK 6-1
let array=[];
let n=parseInt(prompt("ENTER n: "))
for (let i = 0; i < n; i++) {
    let x=parseInt(prompt("ENTER number:"));
    array.push(x);
}
// alert(array)
for (let j = array.length-1; j >= 0; j--) {
    console.log(array[j]+" ");
}

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
//

