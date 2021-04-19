/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let sum = 0
    let nums = ''

    if(a.length>b.length){
        while(a.length>b.length){
            b = '0'+b
        }
    }else if(a.length<b.length){
        while(a.length<b.length){
            a = '0'+a
        }
    }
    let anum = a.toString(2)
    let bnum = b.toString(2)

    for(let i=a.length-1; i>=-1; i--){
        if(sum==1){
            if(anum[i]==undefined){
                nums = '1'+nums
                continue
            }
            sum = 0
            sum = Number(anum[i])+Number(bnum[i])+1
            console.log(anum[3])
            if(sum==3){
                nums = '1'+nums
                sum = 1
            }else if(sum==2){
                nums = '0'+nums
                sum = 1
            }else if(sum==1){
                nums = '1'+nums
                sum = 0
            }else{
                nums = '0'+nums
                sum = 0
            }
        }else if(sum==0){
            if(anum[i]==undefined){
                continue
            }
            sum = Number(anum[i])+Number(bnum[i])
            console.log('sum:',sum)
            if(sum==2){
                nums = '0'+nums
                sum = 1
            }else if(sum==1){
                nums = '1'+nums
                sum = 0
            }else{
                nums = '0'+nums
                sum = 0
            }
        }
        console.log(nums)
    }

    return nums
};