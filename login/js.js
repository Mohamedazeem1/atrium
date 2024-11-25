function loginFrom(){
    let name = document.getElementById("name").value ;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    console.log("the name is :",name);
    console.log("the email is :",email);
    console.log("the password is :",password);

        // if(email!="wizzo3227@gmail.com") {
        //     alert("email is wrong");
        // }
        // if(password!="123"){
        //     alert("passwoed is wrong");
        // } else {
        //     alert("logged in !");
        // }

        if(name == ""){
            alert("input your name!");
            return false ;
        }

        if(email == ""){
            alert("input your email!");
            return false ;
        }
        
        if(password == ""){
            alert("input your password!");
            return false ;
        }    

        if(email ="wizzo3227@gmail.com" && password!="12" ){
            alert("error")
        }else {
            alert("go")
        }
}

const colors = ["red","green","#3F6B42","#C24130","#250004","#766BFF","#DADB42","#E555F2","#0756F5","#F50054","#7B9FF5"
,"#90F5B6","#87FAF5","#A0A7FA","#ECFA00","#DEA48E","#FFFCA3","#CCA9F5","#8A7C00","#7A007A","#80003D"
,"#0AC7AA","#0A0BAA","#FFFFFF","#7A1D0C","#7A6E0C","#122604","#240226","#730B16" ];

const color = document.getElementById(".color");
const but = document.getElementById("but");

but.addEventListener("click",function(){
    const N = R();
    console.log(N);

    document.body.style.backgroundColor =colors [N];
    color.textContent = colors[N];

});

function R (){
    return Math.floor(Math.random() * colors.length);
}






















// document.getElementById("button").onclick=function (){
//     var email = document.getElementById("email").value;
//     // var  password = document.getElementById("password").value;
//     console.log("this",email);
//     // console.log("this is",password);
// }

// {/* <button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">Turn off the light</button> */}


// document.getElementById("button").onclick=function(){
//     var passwoed = document.getElementById ("password").ariaValueMax;
//     var email = document.getElementById ("email").ariaValueMax;
//     console.log("hi",password);
//     console.log("hello",email);
// }

// function button (){
//     let name = document.getElementById("name").value;
//     if (name="mohamed") {
//         console.log(("hi mohamed"));
//     }
// }
