export default class MinHeap {
    public length: number;
    private data: number[]

    constructor() {
        this.length = 0
        this.data = []
    }

    insert(value: number): void {
        if (this.length === 0) {
            this.data[0] = value
            this.length++
            return
        }
        
        this.data[this.length] = value
        this.heapifyUp(this.length)
        this.length++
    }

    delete(): number | undefined {
        if (this.length === 0) return undefined

        if (this.length === 1) {
            const out = this.data[0]
            this.data = []
            this.length--
            return out
        }

        const out = this.data[0]

        this.data[0] = this.data[this.length - 1]
        this.length--
        this.heapifyDown(0)

        return out
    }

    private heapifyUp(index: number) {
        if (this.length === 0) return

        const currValue = this.data[index]
        const parentIndex = this.parentIndex(index)
        const parentValue = this.data[parentIndex]

        if (currValue < parentValue) {
            this.data[parentIndex] = currValue
            this.data[index] = parentValue
            this.heapifyUp(parentIndex)
        }
    }

    private heapifyDown(index: number) {
        const leftChildIndex = this.leftChildIndex(index)
        const rightChildIndex = this.rightChildIndex(index)

        if (this.length <= index || this.length <= leftChildIndex) return

        const currValue = this.data[index]
        const leftChildValue = this.data[leftChildIndex]
        const rightChildValue = this.data[rightChildIndex]

        if (leftChildValue > rightChildValue && currValue > rightChildValue) {
            this.data[rightChildIndex] = currValue
            this.data[index] = rightChildValue
            this.heapifyDown(rightChildIndex)
        } else if (leftChildValue < rightChildValue && currValue > leftChildValue) {
            this.data[leftChildIndex] = currValue
            this.data[index] = leftChildValue
            this.heapifyDown(leftChildIndex)
        }   
    }

    private parentIndex(index: number) {
        return Math.floor(index / 2)
    }

    private leftChildIndex(index: number) {
        return index * 2 + 1
    }

    private rightChildIndex(index: number) {
        return index * 2 + 2
    }
}