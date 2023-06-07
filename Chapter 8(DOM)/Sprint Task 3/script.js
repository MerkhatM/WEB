let select=document.getElementById("selected_id")
let money=document.getElementById("money")
let kzt=document.getElementById("kzt")
let eur=document.getElementById("eur")
let usd=document.getElementById("usd")

function showResult() {
    if(select.value==="KZT"){
        kzt.value="---"
        usd.value=(money.value/431).toFixed(2);
        eur.value=(money.value/509).toFixed(2);

    }
    else if(select.value==="USD"){
        usd.value="---"
        eur.value=(money.value*429/509).toFixed(2)
        kzt.value=(money.value*429).toFixed(2)
    }
    else if(select.value==="EUR"){
        eur.value="---"
        usd.value=(money.value*507/431).toFixed(2)
        kzt.value=(money.value*507).toFixed(2)
    }
}

money.addEventListener("keyup",showResult)
select.addEventListener("change",showResult)
