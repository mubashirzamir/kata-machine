export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0
    let high = haystack.length

    while (low < high) {
        const mid = Math.floor((low + high) / 2)

        if (needle > haystack[mid]) low = mid + 1
        else if (needle < haystack[mid]) high = mid - 1
        else return true
    }

    return false
}