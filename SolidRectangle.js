// for(let i=0;i<5;i++){
//     let str = "";
//     for(let j=0;j<5;j++){
//         str = str +"* ";
//     }
//     console.log(str);
// }
// console.log();

for(let i=0;i<5;i++){
    let str = "";
    for(let j=0;j<5;j++){
        if(i==0|| i==4|| j==0 || j==4){
            str = str +"* ";
        }else{
            str = str +" ";
        }
    }
    console.log(str);
}
for (let i = 0; i < 5; i++) {
    let str = "";
    for (let j = 0; j < 5; j++) {
        if (i == 0 || i == 4 || j == 0 || j == 4) {
            str += "* ";
        } else {
            str += "  ";  // Add spaces for better formatting
        }
    }
    console.log(str);
}
