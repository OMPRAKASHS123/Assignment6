"user strict";

const v=require("prompt-sync");
const prompt=v();

var n=prompt("Enter n : ")


function ComputeDash(n){
    const str = n.toString();
    const result = [str[0]];
      
    for(let i=1; i<str.length; i++)
      {
        if((str[i-1]%2 === 0)&&(str[i]%2 === 0))
         {
          result.push('-', str[i]);
         }
        else
         {
          result.push(str[i]);
         }
      }
    console.log(result.join(''));

}
ComputeDash(n)