        /* 5 4 3 2 1
           5 4 3 2
           5 4 3
           5 4
           5           */

function series(n){
    let str = "";
    for(let i=j; i>=n; i--){
      str += i + " ";
    }
    return str;
  }

  let j = 5;

  for(let i=1; i<=j; i++){
    // let n = j-i+1;
    console.log(series(i));
  }