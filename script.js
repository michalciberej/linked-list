class Node {
  constructor(value=null, previous=null, next=null) {
    this.previous = previous;
    this.value = value;
    this.next = next
  }
}

class LinkedList {
  constructor(head=null) {
    this.head = head;
  }

  append(value) {
    let tempNode = new Node(value)
    if (!tempNode.value) return
    if (this.head === null) this.head = tempNode
    else {
      let temp = this.head
      while (temp.next != null) temp = temp.next
      temp.next = tempNode
    }
  }
  
  prepend(value) {
    let temp = new Node(value)
    if (!temp.value) return
    if (this.head === null) this.head = temp
    else {
      let tempNext = this.head
      this.head = temp
      this.head.next = tempNext
    }
  }

  size() {
    let temp = this.head
    let num = 0
    while (temp.next != null) {
      temp = temp.next
      num++
    }
    return num
  }

  displayHead() {
    return this.head.value
  }

  tail() {
    let temp = this.head
    while (temp.next != null) temp = temp.next
    return temp.value
  }

  at(index) {
    let num = 0
    let temp = this.head
    while (num < index) {
      temp = temp.next
      num++
      if (temp === null)
        return `Node with index ${index} is not in the list. Last index is ${num - 1}`
    }
    return temp.value
  }

  pop() {
    let temp = this.head
    while (temp.next != null) temp = temp.next
  }

  contains(value) {
    let temp = this.head
    while (temp.next != null && temp.value != value) 
      temp = temp.next
    
    if (temp.next === null && temp.value != value)
      return false
    else
      return true
  }

}

const list = new LinkedList()

list.append('4')
list.prepend('1')
list.prepend('2')
list.prepend('3')
list.append('5')



console.log(list)
console.log(list.size())
console.log(list.displayHead())
console.log(list.tail())
console.log(list.at(5))
console.log(list.pop())
console.log(list.contains(5))