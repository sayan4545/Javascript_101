let n = 5;
for(let i=0;i<n;i++){
    let str = "";
    for(let j=0;j<n-i-1;j++){
        str = str+" ";
    }
    for(let j=1;j<=i+1;j++){
        str = str + j +" ";
    }
    console.log(str);
}