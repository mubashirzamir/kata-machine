export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
    if (a === null && b === null) return true
    if (a === null || b === null) return false
    if (a.value !== b.value) return false

    if (!compare(a.left, b.left)) return false
    if (!compare(a.right, b.right)) return false

    return true

    // return compare(a.left, b.left) && compare(a.right, b.right)
}