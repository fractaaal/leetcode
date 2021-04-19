/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let digit = digits[digits.length-1]+1
    if(digit==10){
        let next = true
        for(let i=1; next;i++){         
            digits.splice(digits.length-i,1,0)
            if(i==digits.length){
                digits.unshift(1)
                next = false
                continue
            }

            digit = Number(digits[digits.length-(i+1)])+1
            if(digit<10){
                digits.splice(digits.length-(i+1),1,digit) 
                next = false
            }else{
                continue
            }
        }
    }else{
        digits.splice(digits.length-1,1,digit) 
    }

    return digits   
};