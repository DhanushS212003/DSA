/*      1 
      1 2 1   
    1 2 3 2 1 
      1 2 1   
        1     */

function getSpaces(n){
    let str = "";
    for(let i=1;i<=n;i++){
        str += " " + " " ;
    }
    return str;
}

function getNumbersequence(n){
    let string = "";
    for(let i=1;i<=n;i++){
        string += i + " ";
    } 
    return string;
}

function getRevnumbersequence(n){
    let string = "";
    for(let i=n-1;i>=1;i--){
        string += i + " ";
    } 
    return string;
}

let n = 3;
for(let i=1;i<=n;i++){
    console.log(getSpaces(n-i) + getNumbersequence(i) + getRevnumbersequence(i));
}
for(let i=n-1;i>=1;i--){
    console.log(getSpaces(n-i) + getNumbersequence(i) + getRevnumbersequence(i));
}
