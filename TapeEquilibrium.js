/**
 * Total score: 53%
 * time complexity: O(N * N)
 * @param {number[]} A 
 * @returns {number} min difference
 */
function solution(A) {
    let arr = [1];
    arr = A;
    
    let len = arr.length;
    let min = Number.MAX_SAFE_INTEGER;

    let sum = arr.reduce((a, b) => a+b);
    // console.log(sum);
    for(let p = 1; p < len; p++){
        let first = arr.slice(p).reduce((a, b)=> a+b);
        // console.log(arr)
        // console.log(first);
        let diff = Math.abs(first - (sum-first))
        min = diff < min ? diff : min;
        // console.log(min);
        
    }

    if (len === 1){
        min = Math.abs(arr[0]);
    }
    return min;
}


/**
 * Total score: 100%
 * time complexity: O(N)
 * @param {number[]} A 
 * @returns {number} min difference
 */
function solution(A) {
    let prevSum = A[0];
    let nextSum = A.slice(1, A.length).reduce((a, b) => a + b);
    let min = Math.abs(nextSum - prevSum);
    for (let i = 1; i < A.length - 1; i++) {
        prevSum += A[i];
        nextSum -= A[i];
        if (Math.abs(prevSum - nextSum) < min) {
            min = Math.abs(prevSum - nextSum);
        }
    }
    return min;
}