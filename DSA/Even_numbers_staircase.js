        /* 2 4 6 8 10
           2 4 6 8
           2 4 6
           2 4
           2          */
        
 function series(n){
    let str = "";
    for(let i=1; i<=n; i++){
      str += (2*i) + " ";
    }
    return str;
  }
  
  let j = 5;
  
  for(let i=1; i<=j; i++){
    let n = j-i+1;
    console.log(series(n));
  } 