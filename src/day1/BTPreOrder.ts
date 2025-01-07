export default function pre_order_search(head: BinaryNode<number>): number[] {
    let result: Array<number> = []
    traverse(head, result)
    return result
}

function traverse(node: BinaryNode<number>, result: Array<number>): void {
    if (node) result.push(node.value)
    if (node.left) traverse(node.left, result)
    if (node.right) traverse(node.right, result)
}