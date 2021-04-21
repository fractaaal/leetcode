/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const kaijo = (a)=>{
        let result = 1
        for(let i=1; i<=a; i++){
            result = result*i
        }
        return result
    }

    let count = 0
    for(let i=0; i<=Math.floor(n/2); i++){
        count = count + (kaijo((n-i*2)+i))/(kaijo(n-i*2)*kaijo(i))
    }

    return count
};