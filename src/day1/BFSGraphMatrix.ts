export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {
    let seen: boolean[] = new Array(graph.length).fill(false)
    let prev: number[] = new Array(graph.length).fill(-1)

    seen[source] = true
    let q: number[] = [source]

    while (q.length > 0) {
        const curr = q.shift() as number

        if (curr === needle) break

        const adjs = graph[curr]
        for (let i = 0; i < adjs.length; i++) {
            if (adjs[i] === 0) continue
            if (seen[i]) continue

            seen[i] = true
            prev[i] = curr
            q.push(i)
        }
    }

    let curr = needle
    let out: number[] = []

    while (prev[curr] !== -1) {
        out.push(curr)
        curr = prev[curr]
    }

    if (out.length) {
        return [source].concat(out.reverse())
    }

    return null
}   