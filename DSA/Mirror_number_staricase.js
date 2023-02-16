        /*  1           1
            1 2       2 1
            1 2 3   3 2 1
            1 2 3 4 3 2 1   */

function series(n) {
let str = "";
  for (let i = 1; i <= n; i++) {
    str += i + " ";
  }
  return str;
}

function revseries(n) {
  str = "";
  for (let i = n; i >= 1; i--) {
    str += i + " ";
  }
  return str;
}

function spaces(n) {
  str = "";
  for (let i=1; i<=n; i++){
    str += "  ";
  }
  return str;
}

let n = 5;

for(i=1; i<=n; i++){
  console.log(series(i-1) + spaces(2*(n-i)+1) + revseries(i-1))
} 
console.log(series(n) + revseries(4))