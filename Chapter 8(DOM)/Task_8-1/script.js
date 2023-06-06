let login_inp=document.getElementById("login_inp")
let password_inp=document.getElementById("password_inp")
let form=document.getElementsByClassName("form")
let inputs=document.getElementsByClassName("input_ans")
let isFlag=false
let users=[
    {login:"ilyas",password:"asdasd"},
    {login:"anel",password:"qwerty"},
    {login:"lena",password:"ytrewq"},
    {login:"merkhat",password:"123456"},
    {login:"adil",password:"adik1"},
]

let alertElem=document.createElement('div')
alertElem.className="alert"
alertElem.innerHTML="You sign up successfully!"
function checkUser(){
    for (let i = 0; i < users.length; i++) {
        if (users[i].login===login_inp.value&&users[i].password===password_inp.value){
            isFlag=true
            form[0].remove()
            document.body.append(alertElem)
            break
        }
    }
    if(!isFlag){
        for (let elem of inputs) {
            elem.style.borderColor="yellow"
        }
    }


}




