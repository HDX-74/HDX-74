class Node {
    constructor(element) {
        this.element = element;
        this.next = undefined;
    }
}

class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0
        this.head = undefined
        this.equalsFn = equalsFn
    }
    //向链表尾部添加一个新元素
    push(element) {
        const node = new Node(element)
        let current
        if (this.head == null) {
            this.head = node
        } else {
            current = this.head
            while (current.next != null) {
                current = current.next
            }
            current.next = node
        }
        this.count++
    }
    //在链表特定位置插入新元素
    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element)
            if (index === 0) {
                const current = this.head
                node = current.next
                this.head = node
            } else {
                const previous = this.getElementAt(index - 1)
                const current = previous.next
                node.next = current
                previous.next = node
            }
            this.count++
            return true
        }
        return false
    }
    //返回链表中特定位置的元素
    getElementAt(index) {
        if (index >= 0 && index < this.count) {
            let node = this.head
            for (let i = 0; i < this.count && node != null; i++) {
                node = node.next
            }
            return node
        }
        return undefined
    }
    //从链表的特定位置移除一个元素
    removeAt(index) {//根据某个索引移除
        if (index >= 0 && index < this.count) {
            let current = this.head
            if (index === 0) {
                this.head = current.next
            } else {
                // let previous;
                // for (let i = 0; i < this.count; i++) {
                //     previous = current
                //     current = current.next
                // }
                const previous = this.getElementAt(index - 1)
                current = previous.next
                previous.next = current.next
            }
            this.count--
            return current.element
        }
        return undefined
    }
    //返回元素在链表中的索引
    indexOf(element) {
        let current = this.head
        for (let i = 0; i < this.count && current != null; i++) {
            if (this.equalsFn(element, current.element)) {
                return i
            }
            current = current.next
        }
        return -1
    }
    //根据某个值移除
    remove(element) {
        const index = this.indexOf(element)
        return this.removeAt(index)
    }
    //判空
    isEmpty() {
        return this.count === 0
    }
    //返回链表元素个数
    size() {
        return this.count
    }

    //获取表头
    getHead() {
        return this.head
    }
    //返回整个链表的字符串
    toString() {
        if (this.head == null) {
            return ''
        }
        let objString = `${this.head.element}`
        let current = this.head.next
        for (let i = 0; i < this.count && current != null; i++) {
            objString = `${objString},${current.element}`
            current = current.next
        }
        return objString
    }
}

function defaultEquals(a, b) {
    return a === b;
}

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
//反转链表
var reverseList = function(head) {
    let pre=null
    let cur=head
    while(cur){
        tmp=cur.next
        cur.next=pre
        pre=cur
        cur=tmp
    }
    return pre
}