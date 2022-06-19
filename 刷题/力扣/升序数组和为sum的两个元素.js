/*
 * @Description: 
 * @Author: 黄佳伟
 * @Date: 2022-06-04 15:08:53
 */
function arrSum(arr,sum) {
    let first = 0;
    let end = arr.length - 1;
    while (first < end) {
        if(arr[first]+arr[end]==sum){
            return [arr[first],arr[end]]
        }else if(arr[first]+arr[end]<sum){
            first++;
        }else{
            end--;
        }
    }
    return false;
}
console.log(arrSum([1,3,4,6,9,11],3))