// description of a town with 14 roads and 11 buildings.
const roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

function buildGraph(edges) {
    let graph = Object.create(null) // object with no prototype
    function addEdge(from, to){
        if (from in graph) {
            // if the location is in the graph already add to as a potential destination
            graph[from].push(to)
        } else {
            // otherwise add it to the graph
            graph[from] = [to]
        }
    }
    for (let [from, to] of edges.map(r => r.split("-"))){
        // want to record that we can go in both directions
        addEdge(from, to)
        addEdge(to, from)
    }
    return graph
}

const graph = buildGraph(roads)

console.log(graph)