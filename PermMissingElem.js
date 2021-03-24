/**
 * 
 * @param {number[]} A 
 * @returns number
 */

function solution(A) {
    let arr = [1];
    arr = A;
    
    let len = arr.length + 1;

    if(len > 1){
        let sum = arr.reduce((a,b) => a+b);
        // console.log(sum);
        // console.log((len + 1)*(len)/2);
        
        return (len + 1)*(len)/2 - sum;
    } else {
        return 1;
    }
}