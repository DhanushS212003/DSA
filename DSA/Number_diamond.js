

        /* Number diamond 

        for n=4 
             1
            2 2
           3 3 3
          4 4 4 4
           3 3 3
            2 2
             1   */


        // Nested loop method

/* let n = 4;
let output = "";

for(let i=1; i<=n; i++){
    for(let j=1; j<=n-i; j++){
        output += " ";
    }
    for(let k=1; k<=i; k++){
        output += i + " ";
    }
    output += "\n";
}

for(let i=n-1; i>=1; i--){
    for(let j=1; j<=n-i; j++){
        output += " ";
    }
    for(k=1; k<=i; k++){
        output += i + " ";
    }
    output += "\n";
}
console.log(output); */

        // Nested loop method


        // Function method

function getNumbersequence(n){
    let string = "";
    for(i=1; i<=n; i++){
        string += n + " ";
    }
    return string;
}

function getSpaces(n){
    let string = "";
    for(i=1; i<=n; i++){
        string += " ";
    }
    return string;
}

function getRevnumbersequence(n){
    let string = "";
    for(i=1; i<=n; i++){
        string += n + " "
    }
    return string;
}

let n = 4;
for(let i=1; i<=n; i++){
    console.log(getSpaces(n-i) + getNumbersequence(i));
}
for(let i=n-1; i>=1; i--){
    console.log(getSpaces(n-i) + getRevnumbersequence(i));
}

