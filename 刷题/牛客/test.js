/*
 * @Description: 
 * @Author: 黄佳伟
 * @Date: 2022-05-20 00:11:39
 */
function ListNode(x) {
    this.val = x;
    this.next = null;
}
function Merge(pHead1, pHead2) {
    // write code here
    let head = new ListNode(0);
    let pre = head;
    while (pHead1 != null && pHead2 != null) {
        if (pHead1.val < pHead2.val) {
            pre.next = pHead1;
            pHead1 = pHead1.next;
        } else {
            pre.next = pHead2;
            pHead2 = pHead2.next;
        }
        pre = pre.next;
    }
    pre.next = pHead1 != null ? pHead1 : pHead2;
    return head.next;

}
let b = new ListNode([1, 3, 5])
let a = new ListNode([2, 4, 6])
console.log(Merge(a, b))
console.log(Merge(a, b).next)