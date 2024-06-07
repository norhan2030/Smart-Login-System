let email=document.querySelector("#email")
let passward=document.querySelector("#password")
let btn=document.querySelector(".login")
let pOFemail=document.querySelector(".email")
let pOFpassword=document.querySelector(".password")
let emailRGX=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
let eye=document.querySelector(".fa-eye")
let userName=""
let loginUser=[]



passward.addEventListener("input",function(){
    if(passward.value.trim()==""){
        pOFpassword.innerHTML="Passward is required"
    }else{
        pOFpassword.innerHTML=""
    }
})
email.addEventListener("input",function(){
    if(email.value.trim()==""){
        pOFemail.innerHTML="Email is required"
    }else if(emailRGX.test(email.value.trim())){
        pOFemail.innerHTML=""
    }else{
        pOFemail.innerHTML="Invalid email "
    }
})
btn.addEventListener('click',function(){
    users=JSON.parse(localStorage.getItem("users"))
   
    if(email.value===""||passward.value===""){
        alert("All inputs is required..")
    }else if(pOFemail.innerHTML !="" || pOFpassword.innerHTML !=""){
        alert("please fill correct data..")
    }else{
        for (let i = 0; i < users.length; i++) {
            console.log(users)
            if(users && users[i]["userEmail"] == email.value && users[i]["userPassward"] == passward.value){
                userName=users[i]["userName"]
                loginUser=users[i]
                localStorage.setItem("loginUser",JSON.stringify(loginUser))
                localStorage.setItem("userName",userName)
                setTimeout(() => {
                  window.location = "index.html";
                }, 1000);
                console.log("done")
            }else if(users[i]["userEmail"] === email.value && users[i]["userPassward"] !== passward.value){
                alert("incorrect email or password")
                return

            }else if(users[i]["userEmail"] !== email.value && users[i]["userPassward"] === passward.value){
                alert("incorrect email or password")
                return
            }
            // else{
            //     alert("incorrect email and password")
            //     return

            // }
            
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


