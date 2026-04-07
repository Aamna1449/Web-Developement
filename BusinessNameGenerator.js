let rand=Math.random()
let first,second,third;
// 0,0.33,0.66

// Lets generate the first Word:
if(rand<0.33){
    first="Crazy"
}
else if(rand>0.33 && rand<0.66){
    first="Amazing"
}

else{
    first="Fun"
}

// Lets Generate second word:
if(rand<0.33){
    second="Engine"
}
else if(rand>0.33 && rand<0.66){
    second="Food"
}

else{
   second="Garments"
}

// Lets Generate third word:
if(rand<0.33){
    third="Bros"
}
else if(rand>0.33 && rand<0.66){
    third="Limited"
}

else{
    third="Hub"
}
console.log(`${first} ${second} ${third}`)