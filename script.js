class Node {
  constructor(value=null, previous=null, next=null) {
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
    let prev = null
    while (temp.next != null) {
      prev = temp
      temp = temp.next
    }
    prev.next = null
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

  find(value) {
    let temp = this.head
    let num = 0
    while (temp.next != null && temp.value != value) {
      temp = temp.next
      num++
    }
    if (temp.value != value) return null
    else return num
  }

  toString() {
    let temp = this.head
    let string = 'head => ' 
    while (temp.next != null) {
      string += `( ${temp.value} ) => `
      temp = temp.next
    }
    return string += `( ${temp.value} ) => null`
  }

  insertAt(value, index) {
    let temp = this.head
    let prev = this.head
    let num = 0
    let newNode = new Node(value)
    while (num < index && temp.next != null) {
      prev = temp
      temp = temp.next
      num++
    }
    prev.next = newNode
    newNode.next = temp
  }

  removeAt(index) {
    let temp = this.head
    let prev = this.head
    let num = 0
    if (this.head === null) return
    if (index === 0) this.head = this.head.next
    while (num < index && temp.next != null) {
      prev = temp
      temp = temp.next
      num++
    }
    if ( num !== index ) return 
    prev.next = temp.next
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
console.log(list.at(3))
console.log(list.contains(5))
list.pop()
console.log(list.find('5'))
console.log(list)
console.log(list.toString())
list.insertAt('hello', 1)
console.log(list.toString())
list.removeAt(1)
console.log(list.toString())
