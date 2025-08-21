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

class VillageState {
    constructor(place, parcels){
        this.place = place
        this.parcels = parcels
    }

    move(destination){
        // check if there is a roac from the current place to the destination
        // otherwise return the old state since no valid move
        if (!roadGraph[this.place].includes(destination)){
            return this
        } else {
            // parcels that the robot is carrying
            // map moves parcels to the new location
            // filter devlievers parcels if the destination and address match.
            let parcels = this.parcels.map(p => {
                if (p.place != this.place) return p // leave it alone if not at destination?
                return {place: destination, address: p.address} 
            }).filter(p => p.place != p.address)
            // create a new state with the destination as the new place
            return new VillageState(destination, parcels)
        }
    }
}

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

const roadGraph = buildGraph(roads)

let first = new VillageState("Post Office",
    [{place: "Post Office", address: "Alice's House"}]
)
let next = first.move("Alice's House")

console.log(next.place)
console.log(next.parcels)
console.log(first.place)