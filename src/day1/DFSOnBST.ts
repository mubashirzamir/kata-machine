export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    if (head.value === needle) return true

    if (needle < head.value && head.left) return dfs(head.left, needle)
    if (needle > head.value && head.right) return dfs(head.right, needle)
 
    return false
    // return search(head, needle)
}

// function search(curr: BinaryNode<number> | null, needle: number): boolean {
//     if (!curr) return false
//     if (curr.value === needle) return true
    
//     if (curr.value < needle) return search(curr.right, needle)
//     return search(curr.left, needle)
// }