/**
 * @param A number[]
 * @returns number (找出陣列內沒有的最小正整數)
 */

function solution(A) {
    // js的sort()如果沒帶入參數會用字串比較ex [1, 11, 2 ,3,4] sort()之後不會改變(因為11排在1後面)
    // 要帶入a,b 並a - b確保有sort()
    let arr = Array.from(new Set(A.filter(x => x > 0).sort((a, b) => a - b)));
    console.log(arr);

    let res = 1;

    for(let i = 0; i < arr.length; i++){
        if(res < arr[i]){
            return res;
        }

        if (res === arr[i]){
            res++;
        }
    }

    return res;
}