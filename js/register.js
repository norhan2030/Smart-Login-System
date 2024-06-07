let name=document.querySelector("#name")
let passward=document.querySelector("#password")
let email=document.querySelector("#email")
let btn=document.querySelector(".register")
let pOFname=document.querySelector(".name")
let pOFemail=document.querySelector(".email")
let pOFpassword=document.querySelector(".password")
let emailRGX=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
let eye=document.querySelector(".fa-eye")
let users=[ 
    {userName: "admin", userPassward: "admin", userEmail: "admin@gmail.com"}]
let products=[
    {
    name:"dimond",
    url:"1.jpg"
    },
    {
    name:"dimond",
    url:"2.jpg"
    },
    {
    name:"dimond",
    url:"5.jpg"
    },
    {
    name:"dimond",
    url:"4.jpg"
    },
    {
    name:"dimond",
    url:"3.jpg"
    },
    {
    name:"dimond",
    url:"6.jpg"
    }
]




if(localStorage.getItem("products")){
    users=JSON.parse(localStorage.getItem("users"))
}else{
    localStorage.setItem("users",JSON.stringify(users))
}
// if(users.length==0){
//     console.log("dond")
//     console.log(users)

//     localStorage.setItem("users",JSON.stringify(users))
// }
btn.addEventListener("click",function(){
    users=JSON.parse(localStorage.getItem("users"))
    if(name.value.trim()==="" || passward.value.trim()==="" || email.value.trim()===""){
        alert("All inputs is required..")
    }else if(pOFemail.innerHTML !="" || pOFname.innerHTML !="" || pOFpassword.innerHTML !=""){
        alert("please fill correct data..")
    }
    else{
        user={
            userName:name.value,
            userPassward:passward.value,
            userEmail:email.value
        }
        console.log(users)
        users.push(user)
        localStorage.setItem("users",JSON.stringify(users))
        localStorage.setItem("products",JSON.stringify(products))

        setTimeout(()=>{
            window.location="login.html"
        },1500)
    }
})
name.addEventListener("input",function(){
    if(name.value.trim()==""){
        pOFname.innerHTML="Name is required"
    }else{
        pOFname.innerHTML=""
    }  
})
passward.addEventListener("input",function(){
    if(passward.value.trim()==""){
        pOFpassword.innerHTML="Passward is required"
    }else{
        pOFpassword.innerHTML=""
    }
})
email.addEventListener("input",function(){
    users=JSON.parse(localStorage.getItem("users"))
    if(email.value.trim()==""){
        pOFemail.innerHTML="Email is required"
    }else if(emailRGX.test(email.value.trim())){
        pOFemail.innerHTML=""
    }else{
        pOFemail.innerHTML="Invalid email "
    }
   if(users){
        for (let i = 0; i < users.length; i++) {
            if(email.value.trim()==users[i]["userEmail"]){
                pOFemail.innerHTML="This email already exists"
            }
            
        }
    }
})

eye.addEventListener('click', () => {
    if (passward.type === 'password') {
        passward.type = 'text';
    } else {
        passward.type = 'password';
    }
  });