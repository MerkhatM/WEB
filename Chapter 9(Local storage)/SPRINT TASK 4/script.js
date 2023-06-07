let email_inp=document.getElementById("email_inp")
let password_inp=document.getElementById("password_inp")
let fullName_inp=document.getElementById("fullName_inp")
let date_inp=document.getElementById("date_inp")
let country_select=document.getElementById("country_select")
let register_btn=document.getElementById("register_btn")


function registerUser() {

    let usersFromLocal=JSON.parse(localStorage.getItem("users"))
    let hasUser=false

    if(usersFromLocal!=null){
        for (let i = 0; i < usersFromLocal.length; i++) {
            if(usersFromLocal[i].email===email_inp.value){
                hasUser=true
                break
            }
        }
    }



    if(!hasUser) {
        let user = {
            email: email_inp.value,
            password: password_inp.value,
            fullName: fullName_inp.value,
            country: country_select.value,
            birthDate: date_inp.value
        }
        let users=JSON.parse(localStorage.getItem("users"))

        users.push(user)
        localStorage.setItem("users", JSON.stringify(users))
        alert("USER ADDED SUCCESFULLY")
    }
}

register_btn.addEventListener("click",registerUser)