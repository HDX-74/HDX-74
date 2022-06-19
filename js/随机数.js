function RandomNumBoth(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();//返回一个介于 0 ~ 1 之间的伪随机数（包括 0，不包括 1）
    var num = Min + Math.round(Rand * Range); //四舍五入
    return num;
}