//011235匿名函数和箭头函数
let fib = function (n) {//递归效率低
    return n < 2 ? n : arguments.callee(n - 1) + arguments.callee(n - 2)
}

//动态规划算法
// void dp()
// {
//     f[1] = 1;f[2] = 1;
//     for(int i = 3;i <= n ;i ++)
//         f[i] = f[i-1] + f[i-2];
// }

// console.log(fib(5))
const f = n => {//斐波那契迭代效率高
    let num1 = 0, num2 = 1
    for (let i = 0; i < n; i++) {
        let temp = num2
        num2 = num1 + num2
        num1 = temp
    }
    return num1
}
// console.log(f(4))

//爬楼梯问题（斐波那契数列的应用）
var climbStairs = function(n){
    let fibArr=[]
    fibArr[0] = fibArr[1] = 1;
    for(let i = 2; i <= n; i++) {
        fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
    }
    return fibArr[n];
}
console.log(climbStairs(1))