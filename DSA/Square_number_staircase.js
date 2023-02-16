        /* 1 4 9 16
           1 4 9
           1 4
           1        */

 function series(n){
    let str = "";
    for(let i=1; i<=n; i++){
      str += (i*i) + " ";
    }
    return str;
  }
  
  let j = 4;
  
  for(let i=1; i<=j; i++){
    let n = j-i+1;
    console.log(series(n));
  } 