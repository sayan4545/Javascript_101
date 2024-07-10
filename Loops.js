for(let i=0;i<4;i++){
    let str = "";
    for(let j=0;j<4;j++){
        str = str+"*";
        //console.log(str);
    }
    console.log(str);
}

for(let i =0;i<4;i++){
    let str = "";
    for(let j=0;j<i+1;j++){
        str = str +"* ";
    }
    console.log(str);
}

for(let i=0;i<4;i++){
    let str = "";
    for(let j=0;j<4-i;j++){
        str = str +"* ";
    }
    console.log(str);
    
}
let x = [1,2,3];
x[10] = 11;
console.log(x);
console.log(x.length);