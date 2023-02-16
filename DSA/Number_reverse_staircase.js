            
            
            /* Reverse number staircase 

              1
            2 1
          3 2 1
        4 3 2 1
        For n = 4 */

let n = 4;
let output = "";

for(let i=1; i<=n; i++){
    for(let j=n; j>i; j--){
        output +="  ";
    }
    for(let k=i; k>=1; k--){
        output += k + " ";
    }
    output +="\n";
}
console.log(output);
