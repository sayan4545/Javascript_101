let n =5;
for(let i=0;i<n;i++){
    let str = "";
    for(let j=0;j<n-i;j++){
        str = str +(j+1);
    }
    console.log(str);
}
console.log(typeof(str));