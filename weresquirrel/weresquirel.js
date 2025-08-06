require('/Users/harry/Documents/eloquentJavascript/weresquirrel/journal.js')

function tableFor(event, journal){
    let table = [0, 0, 0, 0];
    for (let i = 0; i < journal.length; i++){
        let entry = journal[i], index = 0;
        /* 
        table[0] is no event no squirrel
        table[1] is event but no squirrel
        table[2] is no event but squirrel
        table[3] is event and squirrel
        */
        if (entry.events.includes(event)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
}

function findJournalEvents(journal) {
    let events = []
    for (let entry of journal){
        for (let event of entry.events){
            if (!events.includes(event)){
                events.push(event)
            }
        }
    }
    return events
}

function phi(table) {
    // function to compute correlation coefficient between event and squirrel
    return (table[3] * table[0] - table[2]* table[1]) /
        Math.sqrt((table[2] + table[3]) *
                  (table[0] + table[1]) *
                  (table[1] + table[3]) *
                  (table[0] + table[2]));
}

console.log(tableFor("pizza", JOURNAL))
for (let event of findJournalEvents(JOURNAL)){
    let correlation = phi(tableFor(event, JOURNAL));
    if (Math.abs(correlation) > 0.1){
        console.log(event + ": ", correlation);
    }
}

for (let entry of JOURNAL){
    if (entry.events.includes("peanuts") &&
        !entry.events.includes("brushed teeth")){
            entry.events.push("peanut teeth");
    }
}

console.log(phi(tableFor("peanut teeth", JOURNAL)))