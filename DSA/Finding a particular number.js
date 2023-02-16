        // Find a number

let a = [2,3,5,8,10];
let found = false;
let x = 1;

for(i=0; i<a.length; i++){
    if(x == a[i]){
        found = true;
        break;
    }
}

if (found){
    console.log(x + " is found in the array")
}
else{
    console.log(x + " is not found in the array")
}
