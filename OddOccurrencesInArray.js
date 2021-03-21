// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

    /**
     * @param {number[]} A
     * Detected time complexity: O(N*2)
     * **需要O(N)才會過**
     */

function solution(A) {
    let arr = [1];
    arr = A;

    let res = [1];
    res = A;
    let temp = new Set();
    arr.forEach(x => temp.has(x) ? res = res.filter(item => item !== x) : temp.add(x));
    
    // arr = [...new Set(arr)].filter(item => [...repeat].findIndex(x => x === item) === -1 ? true : false);
    return arr[0];
}

/**
 * 最常見解法
 * 9^5 ==> 轉成binary做XOR(兩個不同 = 1 相同 = 0)
 * 1001
 * 0101
 * =1100 轉成10進位 = 12
 * @description 0^X = X (0和某數XOR會=某數), A^A = 0(同數字XOR = 0)
 *  
 */
function solution(A) {
    let result =0;
    for (let element of A) {
        result ^= element;
        // 等同於 result = result^element;
    }
        console.log(9^5);


    return result
}

/**
 * 
 * 容易懂的解法
 * O(N)
 */

function solution(A) {
    let arr = [1];
    arr = A.sort((a, b) => a - b);

    let result = 0;
    for(i = 0; i < arr.length; i+=2){
        if(arr[i] === arr[i+1]){

        } else {
            return arr[i];
        }
    }

    return result
}
