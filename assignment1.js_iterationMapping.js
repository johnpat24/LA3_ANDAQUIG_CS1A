//ask the user for maxlimit
let maxlimit = parseInt(prompt("enter the maxlimit: "));

let add = 0;
// double loop
for ( let i = 0; i <= maxlimit; i++) {
    for(let j = 0; j <= maxlimit; j++) {
        // add or sum the current value of the counters at each iteration
        add = i + j;
        // print the loop and the sum
        console.log(`[${i}] [${j}] Added value is ${add}`);
    
    }
}