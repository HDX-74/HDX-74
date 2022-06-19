//基于数组的Stack类
class StackByArray {
    constructor() {
        this.items = []
    }

    push(element) {      //入栈
        this.items.push(element)
    }

    pop() {      //出栈
        return this.items.pop()
    }

    peek() {     //查看栈顶元素
        return this.items(this.items.length - 1)
    }

    isEmpty() {      //判空
        return this.items.length === 0
    }

    clear() {       //清空栈
        this.items = []
    }   

    size() {        //查看栈大小
        return this.items.length
    }
}

//基于对象的StacK类
class StackByObject {
    constructor() {
        this.count = 0
        this.items = {}
    }

    push(element) {      //入栈
        this.items[this.count] = element
        this.count++
    }

    pop() {      //出栈
        if (this.isEmpty()) {
            return undefined
        }
        this.count--
        const result = this.items[this.count]
        delete this.items[this.count]
        return result
    }

    peek() {     //查看栈顶元素
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.count-1]
    }

    isEmpty() {      //判空
        return this.count === 0
    }

    clear() {       //清空栈
        this.count = 0
        this.items = {}
    }

    size() {        //查看栈大小
        return this.count
    }

    toString(){
        if(this.isEmpty()){
            return ''
        }
        let objString = `${this.items[0]}`
        for(let i=1;i<this.count;i++){
            objString=`${objString},${this.items[i]}`
        }
        return objString
    }
}
//十进制转换2-36进制
baseConverter=(num,base)=>{
    const remStack = new StackByArray()
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let number = num
    let rem
    let baseString = ''
    if(!(base >= 2 && base <=36)){
        return ''
    }
    while(number>0){
        rem = Math.floor(number%base)
        remStack.push(rem)
        number = Math.floor(number/base)
    }

    while(!remStack.isEmpty()){
        baseString += digits[remStack.pop()]
    }

    return baseString
}