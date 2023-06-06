let select=document.getElementById("selected_id")
let value=select.value;
let money=document.getElementById("money")
let kzt=document.getElementById("kzt")
let eur=document.getElementById("eur")
let usd=document.getElementById("usd")
if(value=="KZT"){
    usd.value=parseInt(money.value*407);
    eur.value=parseInt(money.value*504);
    kzt.value="---"
}