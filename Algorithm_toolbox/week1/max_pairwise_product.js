// by Jamiu Suleiman

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.once('line', () => {
    rl.on('line', readLine);
});

function readLine (line) {
    const arr = line.toString().split(' ').map(Number);


    console.log(max(arr));
    

     process.exit();
}

function max(arr) {
    // write your code here
    const len = arr.length;

    let max1 = -1;
    let max2 = -1;
   
   for(let i=0; i < len; i++){
       if(max1 === -1 || arr[i] > arr[max1]){
        max1 = i;
       }
   }

   for(let j=0; j < len; j++) {
       if( (j!=max1) && ((max2 === -1) || (arr[j] > arr[max2]))) {
        max2 = j;
       }
   }

   return arr[max1] * arr[max2];
}

module.exports = max;
