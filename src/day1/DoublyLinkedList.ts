type Node<T> = {
    value?: T,
    next?: Node<T>,
    prev?: Node<T>,
}

export default class DoublyLinkedList<T> {
    public length: number
    public head?: Node<T>
    public tail?: Node<T>

    constructor() {
        this.length = 0
        this.head = this.tail = undefined
    }

    private debug() {
        let str = ""
        let curr = this.head
        for (let i = 0;  curr && i < this.length; i++) {
            str += `${i} => ${curr.value} | `
        }
        console.log(str)
    }

    prepend(item: T): void {
        this.length++
        const node = { value: item } as Node<T>
        if (!this.head) {
            this.head = this.tail = node
            return
        }

        node.next = this.head
        this.head.prev = node
        this.head = node
    }

    insertAt(item: T, idx: number): void {
        if (this.length === 0) return this.append(item)
        if (this.length - 1 === idx) return this.prepend(item)

        this.length++
        const node = { value: item } as Node<T>

        let curr = this.getAt(idx)

        if (curr) {
            node.next = curr
            node.prev = curr.prev
            curr.prev = node

            if (node.prev) {
                node.prev.next = node
            }
        }
    }

    append(item: T): void {
        this.length++
        const node = { value: item } as Node<T>

        if (!this.tail) {
            this.head = this.tail = node
            return
        }

        node.prev = this.tail
        this.tail.next = node
        this.tail = node
    }

    get(idx: number): T | undefined {
        return this.getAt(idx)?.value
    }

    remove(item: T): T | undefined {
        let curr = this.head

        let i = 0
        while (curr && i <= this.length) {
            if (curr.value === item) break
            curr = curr.next
            i++
        }

        return this.removeNode(curr)
    }

    removeAt(idx: number): T | undefined {
        return this.removeNode(this.getAt(idx))
    }   

    private getAt(idx: number): Node<T> | undefined {        
        let curr = this.head

        if (idx >= this.length) throw new Error('Index out of bounds')

        let i = 0
        while (i < idx && curr) {
            curr = curr.next
            i++
        }
        
        return curr
    }

    private removeNode(node?: Node<T>) {
        if (!node) return undefined

        this.length--

        if (this.length === 0) {
            this.head = this.tail = undefined
            return node.value
        }

        if (node === this.head) {
            this.head = node.next
            if (this.head) this.head.prev = undefined
        }

        if (node === this.tail) {
            this.tail = node.prev
        }

        if (node.next) {
            node.next.prev = node.prev
        }

        if (node.prev) {
            node.prev.next = node.next
        }

        return node.value
    }
}