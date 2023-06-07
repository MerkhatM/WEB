let email_inp=document.getElementById("email_inp")
let password_inp=document.getElementById("password_inp")
let login_btn=document.getElementById("login_btn")


function loginToAcc() {

    let usersFromLocal=JSON.parse(localStorage.getItem("users"))
    let hasUser=false
    let index
    if(usersFromLocal!=null){
        for (let i = 0; i < usersFromLocal.length; i++) {
            if(usersFromLocal[i].email===email_inp.value && usersFromLocal[i].password===password_inp.value){
                hasUser=true
                index=i
                localStorage.setItem("user_auth",index)
                setTimeout(function() {
                    window.location.href = "../user/user.html";
                }, 500);
                break
            }
        }
    }
}

login_btn.addEventListener("click",loginToAcc)