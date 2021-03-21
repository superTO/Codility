/**
 * (X <= Y)
 * X + D*? >= Y
 * 
 * returns ?
 */
function solution(X, Y, D) {
    return Math.ceil((Y - X)/D);
}