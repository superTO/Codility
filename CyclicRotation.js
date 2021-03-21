// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
/**
 * 
 * @param {number[]} A 
 * @param {number} K 
 * @returns {number[]} 
 */

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    let arr = [1];
    arr = A;

    let rotateTime = 0;
    // rotateTime = K;

    rotateTime =  K % arr.length;
    if (rotateTime === 0){
        return arr;
    } else {
        for(let i=0; i< rotateTime ; i++){
            let temp = arr.pop();
            arr = [temp, ...arr];
        }
        return arr;
    }

}