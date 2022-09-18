"user strict"

const s=require("prompt-sync");
const prompt=s();

const n=prompt("enter n");

function findlargest(n){
    const arr=[3,45,6,7,23,5,7,8];
arr.sort((a, b)=>a-b);
console.log(arr[n-1]);
}
findlargest(n);