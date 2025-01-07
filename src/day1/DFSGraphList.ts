export default function dfs(graph: WeightedAdjacencyList, source: number, needle: number): number[] | null {
    let path: number[] = []
    let seen: boolean[] = new Array(graph.length).fill(false)
    walk(graph, source, needle, seen, path)

    return path.length === 0 ? null : path
}

function walk(graph: WeightedAdjacencyList, curr: number, needle: number, seen: boolean[], path: number[]): boolean {
    if (seen[curr]) return false

    seen[curr] = true
    path.push(curr)

    if (curr === needle) return true

    const adjList = graph[curr]
    for (let i = 0; i < adjList.length; i++) {
        if (walk(graph, adjList[i].to, needle, seen, path)) return true
    }

    path.pop()
    return false
}