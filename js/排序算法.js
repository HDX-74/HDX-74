//1.冒泡排序
const BubbleSort = (arr) => {
    let temp;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp
            }
        }
    }

    return arr
}
console.log(BubbleSort([7, 2, 3, 1, 4]))

//2.选择排序
const SelectSort = (arr) => {
    let min, temp;
    for (let i = 0; i < arr.length - 1; i++) {
        min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j
            }
        }
        temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
    }
    return arr
}

console.log(SelectSort([7, 2, 3, 1, 4]))