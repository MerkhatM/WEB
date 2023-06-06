let name_inp=document.getElementById("name_inp")
let surname_inp=document.getElementById("surname_inp")
let selectValue=document.getElementById("select_inp")
let phone_inp=document.getElementById("phone_inp")
let register_btn=document.getElementById("reg_btn")
let saveToDraft=document.getElementById("save_btn")


function loadTolocal(){
    let user={
        name:name_inp.value,
        surname:surname_inp.value,
        selectValue:selectValue.value,
        phone_inp:phone_inp.value
    }
    localStorage.setItem("user",JSON.stringify(user))
}

function loadToBrowser(){
    let userFromLocal=localStorage.getItem("user")
    let userFromJson=JSON.parse(userFromLocal)
    name_inp.value=userFromJson.name;
    surname_inp.value=userFromJson.surname;
    selectValue.value=userFromJson.selectValue;
    phone_inp.value=userFromJson.phone_inp
}

saveToDraft.addEventListener("click", loadTolocal)
// saveToDraft.onclick = loadTolocal()