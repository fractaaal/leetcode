/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let common = strs[0]
    let count = 0
    if(strs.length==0||strs[0]==""){
        return ""
    }else{
        for(let j=1;j<strs.length;j++){
            let next = strs[j] 
            if(common.length>=next.length){
                count = common.length 
            } else{
                count = next.length
            }
            for(let i=0;i<count;i++){
                if(next[i]==undefined){
                    for(let s=1;s<=common.length-next.length;s++){
                        common = common.split("")
                        common.pop()
                        common = common.join("")
                    }
                }else if(next[i]!==common[i]){
                    common = common.split("")
                    common.splice(i,1,"_")
                    common = common.join("")
                }
            }     
        }
        common = common.split("")
        let arrey = []
        for(let i = 0;common[i]!=="_"&&i<common.length; i++){
            arrey.push(common[i])
        }
        arrey = arrey.join("")
        return arrey
    }
};