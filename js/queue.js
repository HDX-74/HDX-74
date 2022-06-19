//普通队列
class Queue {
    constructor() {
        this.count = 0
        this.lowestCount = 0
        this.items = {}
    }

    enqueue(element) {   //入队
        this.items[this.count] = element
        this.count++
    }

    dequeue() {      //出队
        if (this.isEmpty()) {
            return undefined
        }
        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return result
    }

    peek() {     //查看队列的第一个元素
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.lowestCount]
    }

    size() {     //查看队列长度
        return this.count - this.lowestCount
    }

    clear() {        //清空
        this.count = 0
        this.lowestCount = 0
        this.items = {}
    }

    isEmpty() {      //判空
        return this.size() === 0
    }

    toString() {     //取值
        if (this.isEmpty()) {
            return ''
        }
        let objString = `${this.items[this.lowestCount]}`
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`
        }
        return objString
    }
}
//双端队列
class Deque {
    constructor() {
        this.count = 0
        this.lowestCount = 0
        this.items = {}
    }
    //在双端队列前端添加新的元素
    addFront(element) {
        if (this.isEmpty()) {
            this.addBack(element)
        } else if (this.lowestCount > 0) {
            this.lowestCount--
            this.items[this.lowestCount] = element
        } else {
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i - 1]
            }
            this.count++
            this.lowestCount = 0
            this.items[0] = element
        }

    }
    //在双端队列后端添加新的元素  
    addBack(element) {
        this.items[this.count] = element
        this.count++
    }
    //移除双端队列前端的第一个元素
    removeFront() {
        if (this.isEmpty()) {
            return undefined
        }
        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return result
    }
    //移除双端队列后端的第一个元素  
    removeBack() {
        if (this.isEmpty()) {
            return undefined
        }
        this.count--
        const result = this.items[this.count]
        delete this.items[this.count]
        return result
    }
    //返回双端队列前端的第一个元素
    peekFront() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.lowestCount]
    }
    //返回双端队列后端的第一个元素
    peekBack() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.count - 1]
    }
    clear() {
        this.count = 0
        this, this.lowestCount = 0
        this.items = {}
    }
    size() {
        return this.count - this.lowestCount
    }
    //判空
    isEmpty() {
        return this.count - this.lowestCount === 0
    }
    toString() {
        if (this.isEmpty()) {
            return ''
        }
        let objString = `${this.items[this.lowestCount]}`
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`
        }
        return objString
    }
}