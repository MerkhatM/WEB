let user_a=document.getElementById("user_a")
let user_email=document.getElementById("user_email")
let user_fullName=document.getElementById("user_fullName")
let user_country=document.getElementById("user_country")
let user_date=document.getElementById("user_date")
let header1=document.getElementById("header1")
let authUser=JSON.parse(localStorage.getItem("users"))
let index=JSON.parse(localStorage.getItem("user_auth"))

user_a.innerText=authUser[index].fullName
user_email.innerText=authUser[index].email
user_fullName.innerText=authUser[index].fullName
user_country.innerText=authUser[index].country
user_date.innerText=authUser[index].birthDate

header1.innerText="WELCOME "+ authUser[index].fullName