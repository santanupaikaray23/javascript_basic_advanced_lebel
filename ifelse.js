if(condition){
    do something
}else{
    do something
}

var a =34432
if(a%4==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}

var name = "Santanu"
if(name=="Sidhanta"){
    console.log(`Hi ${name} you are admin`)
}else if(name=="Sipun"){
    console.log(`Hi ${name} you are super admin`)
}else{
    console.log(`Hi ${name} I don't know you`)
}

var role = "Admin"
var name  = "Santanu"
if(role == "Admin"){
    if(name=="Sidhanta"){
        console.log(`hi ${name} you are ${role}`)
    }else{
        console.log(`hi ${name} you are unknown`)
    }
}else if (role == "Admin"){
    if(name=="Sidhanta"){
        console.log(`hi ${name} you are ${role}`)
    }else{
        console.log(`hi ${name} you are unknown`)
    }
}

var a = -1
if (a){
    console.log("Hi")
}else{
    console.log("Bye")
}

Ternary > single line if else
/////////
var a = 11
a>10?"hii":"Bie"