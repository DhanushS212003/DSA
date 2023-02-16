        // Find number n times

let a = [2,4,5,2,8];
let count = 0;
let num = 2;

for(i=0; i<a.length; i++){
  if(num == a[i]){
     count++;
  }
}

if (count == 0){
    console.log(num + " is not found")
}
else if (count ==1){
    console.log(num + " is found " + count + " time")
}
else {
  console.log(num + " is found " + count + " times")
}