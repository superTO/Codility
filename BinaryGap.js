/**
 * @param N is Number
 * @returns response longest binary gap
 * @description Transforming N to binary by using toString(2),
 * and removing extra '0' before the first '1' and after last '1',
 * finally use split('1') count binary gap
 */

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)

    // Transforming N to binary by using toString(2)
    let bin = '';
    bin = N.toString(2);

    console.log(bin);

    let zeroString = ['1'];
    zeroString = bin.split('');
    // console.log(zeroString);
    
    // removing extra '0' before the first '1' and after last '1'
    /** 
     * 000001000010001000100 -> 10000100010001
    */
    const firstIndex = zeroString.findIndex(x => x === '1');
    const lastIndex = zeroString.lastIndexOf('1');
    
    let newArr = ['1'];
    newArr = [];
    if (firstIndex !== -1 && lastIndex !== -1 && firstIndex !== lastIndex){
        for(let i = 0; i < zeroString.length; i++){
            if (i >= firstIndex && i <= lastIndex){
                newArr.push(zeroString[i]);
            }
        }
    } else {
        return 0;
    }
    console.log(newArr);
    // finally use split('1') count binary gap
    return count(newArr.toString().replace(/,/g, '').split('1'));
}

function count(newArr){
    console.log(newArr)
    let max = 0;
        for(let i = 0; i < newArr.length; i++){
            if (newArr[i]){
                max = newArr[i].length > max ? newArr[i].length : max;
            }
            // console.log(max);
        }
    return max;
}