let userNameLink=document.querySelector(".user-nsme")
let userName=localStorage.getItem("userName")
let Logout=document.querySelector(".Logout")
let updateInfoBtn=document.querySelector(".update-info")
let loginUser=JSON.parse(localStorage.getItem("loginUser"))
let name=document.querySelector("#name")
let passward=document.querySelector("#password")
let email=document.querySelector("#email")
let ubdateDataBtn=document.querySelector(".ubdate-data")
let pOFname=document.querySelector(".name")
let pOFemail=document.querySelector(".email")
let pOFpassword=document.querySelector(".password")
let emailRGX=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
let eye=document.querySelector(".fa-eye")
let box=document.querySelector(".box")
// let closeBox=document.querySelector(".fa-circle-xmark")
// let popup=document.querySelector(".upp")
let updateIndex=0
let popimg=document.querySelector(".popimg")
let next=document.querySelector(".next")
let pre=document.querySelector(".pre")
let nextIndex=0
// console.log(allimg)

let allProducts=JSON.parse(localStorage.getItem("products"))

//gard
if(localStorage.getItem("userName")==null){
    setTimeout(function(){
        localStorage.removeItem("userName")
        document.location="login.html"
    },1)
}

Logout.addEventListener("click",function(){
    setTimeout(function(){
        localStorage.removeItem("userName")
        localStorage.removeItem("loginUser")

        document.location="login.html"
    },1000)
})
userNameLink.innerHTML=userName



updateInfoBtn.addEventListener("click",function(){
    console.log(loginUser)
    name.value=loginUser["userName"]
    email.value=loginUser["userEmail"]
    passward.value=loginUser["userPassward"]

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
    // for (let i = 0; i < users.length; i++) {
    //     if(email.value.trim()==users[i]["userEmail"]){
    //         pOFemail.innerHTML="This email already exists"
    //     }
        
    // }
})

ubdateDataBtn.addEventListener("click",function(){
    let users=JSON.parse(localStorage.getItem("users"));
    if(name.value.trim()==="" || passward.value.trim()==="" || email.value.trim()===""){
        alert("please fill data..")
    }else if(pOFemail.innerHTML !="" || pOFname.innerHTML !="" || pOFpassword.innerHTML !=""){
        alert("please fill correct data..")
    }else{
        for (let i = 0; i < users.length; i++) {
            if(users[i]["userName"]==userName){
                updateIndex=i
            }
        }

        users[updateIndex]["userName"]=name.value
        users[updateIndex]["userPassward"]=passward.value
        users[updateIndex]["userEmail"]=email.value
        localStorage.setItem("users",JSON.stringify(users))
        localStorage.setItem("loginUser",JSON.stringify(users[updateIndex]))
        localStorage.setItem("userName",name.value)


        document.querySelector(".close_btn").click()
        alert("Data updated successfully")
        location.reload();
    }
   
   

})

eye.addEventListener('click', () => {
    if (passward.type === 'password') {
        passward.type = 'text';
    } else {
        passward.type = 'password';
    }
});



products=[
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
// localStorage.setItem("products",JSON.stringify(products))


container=""
for (let i = 0; i < allProducts.length; i++) {
    container +=`
    <div class="col-md-4">
                    <a data-bs-toggle="modal" data-bs-target="#staticBackdrop2"><img src="${allProducts[i].url}" class="w-100 allimg" height="250" alt=""></a>
                    <div class="">
                        <h5 class="text-start my-3">${allProducts[i].name}</h5>
                        <a href="" class="btn update w-100 mb-2 " id="update" data-bs-toggle="modal" data-bs-target="#staticBackdrop3">Update</a>
                        <a href="" class="btn delete w-100 " id="deleteProduct">Delete</a>
                    </div>
                </div>
    
    `
    
}
box.innerHTML=container


// closeBox.addEventListener("click",function(){
//     popup.style.display="none"
// })




// change img of popup

let allimg=document.querySelectorAll(".allimg")
console.log(allimg)
for (let i = 0; i < allimg.length; i++) {
    allimg[i].addEventListener("click",function(e){
        let newsrc=e.target.getAttribute('src')
        popimg.style.backgroundImage =`url(${newsrc})`
        nextIndex=i
    })
    
}

// next pre buttons
next.addEventListener("click",function(){
    let newNextIndex=nextIndex++
    let nextImgSrc=products[newNextIndex]["url"]
    popimg.style.backgroundImage=`url(${nextImgSrc})`
    if(nextIndex==6) nextIndex=0
})
pre.addEventListener("click",function(){
    newPreIndex=nextIndex--
    let preImgSrc=products[newPreIndex]["url"]
    popimg.style.backgroundImage=`url(${preImgSrc})`
    if(nextIndex<0) nextIndex=5
})

let updatedUrl=document.querySelector("#img")
let updatedNmae=document.querySelector("#nameProduct")
let pOfImg=document.querySelector(".imgg")
let pOfName=document.querySelector(".namee")
let allUpdateBtn=document.querySelectorAll("#update")
let saveChange=document.querySelector(".update-product")




// validtion on update popup inputs
updatedUrl.addEventListener("input",function(){
    if(updatedUrl.value.trim()==""){
        pOfImg.innerHTML="Phpto is required"
    }else{
        pOfImg.innerHTML=""
    }
})

updatedNmae.addEventListener("input",function(){
    if(updatedNmae.value.trim()==""){
        pOfName.innerHTML="Name is required"
    }else{
        pOfName.innerHTML=""
    }
})




// put values in inputs of update popup
let updateIndexProduct=0
for (let i = 0; i < allUpdateBtn.length; i++) {
    allUpdateBtn[i].addEventListener("click",function(){
        console.log(allProducts[i]["url"])
        // updatedUrl.value =allProducts[i]["url"]
        console.log(updatedNmae.value)
        updatedNmae.value =allProducts[i]["name"]
        updateIndexProduct=i
    })
    
}


//update popup
saveChange.addEventListener("click",function(){
    // console.log( )
    allProducts[updateIndexProduct]["name"]=updatedNmae.value
    allProducts[updateIndexProduct]["url"]=updatedUrl.files[0].name
    localStorage.setItem("products",JSON.stringify(allProducts))
    document.querySelector(".close_shange").click()
    location.reload();
})


let deleteProductBtns=document.querySelectorAll("#deleteProduct")

for (let i = 0; i < deleteProductBtns.length; i++) {
    deleteProductBtns[i].addEventListener("click",function(){
        allProducts.splice(i,1)
        localStorage.setItem("products",JSON.stringify(allProducts))
    })
    
}