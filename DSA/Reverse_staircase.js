        /* 1 2 3 4 5
           1 2 3 4
           1 2 3
           1 2
           1            */

function series(n){
    let str = "";
    for(let i=1; i<=n; i++){
      str += i + " ";
    }
    return str;
  }
  
  let j = 5;
  
  for(let i=1; i<=j; i++){
    let n = j-i+1;
    console.log(series(n));
  } 