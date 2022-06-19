//求阶乘
const jc=function (n) {
    if(n>=1){
        return n===1?1:arguments.callee(n-1)*n
    }
    else return undefined
}
console.log(jc(3))
