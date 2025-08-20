class Group {
    constructor() {
        this.group = []
    }

    add (value) {
        if (this.group.indexOf(value) < 0){
            this.group.push(value)
        }
    }

    delete (value) {
        if (this.group.indexOf(value) >= 0) {
            this.group.splice(this.group.indexOf(value), 1)
        }
    }

    has (value) {
        return (this.group.indexOf(value) >= 0)
    }

    static from (arr) {
        let grouping = new Group()
        for (let element of arr){
            grouping.add(element)
        }
        return grouping
    }
}

class GroupIterator {
    constructor(group) {
        this.group = group.group
        this.position = 0
    }

    next () {
        if (this.position >= this.group.length){
            return {done: true}
        }
        let value = this.group[this.position]
        this.position += 1
        return {value, done: false}
    }
}

Group.prototype[Symbol.iterator] = function() {
        return new GroupIterator(this)
}

let group = Group.from([10, 20, 20]);
console.log(group.group)
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));

for (let elm of Group.from(['a', 'a', 'b', 'd', 'e'])){
    console.log(elm)
}