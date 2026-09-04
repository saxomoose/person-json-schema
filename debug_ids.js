const fs = require('fs');

function findIds(obj, path = '') {
    const ids = [];
    if (obj && typeof obj === 'object') {
        if (obj['$id']) {
            ids.push(path + ' -> ' + obj['$id']);
        }
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                ids.push(...findIds(obj[key], path + '.' + key));
            }
        }
    }
    return ids;
}

const schema = JSON.parse(fs.readFileSync('./output/schemas/natural_person_current.json', 'utf8'));
const allIds = findIds(schema);
console.log('All $id occurrences:');
allIds.forEach(id => console.log(id));

// Count occurrences of each ID
const idCounts = {};
allIds.forEach(id => {
    const match = id.match(/->\s*(\S+)$/);
    if (match) {
        const idName = match[1];
        idCounts[idName] = (idCounts[idName] || 0) + 1;
    }
});

console.log('\nID Counts:');
for (const [id, count] of Object.entries(idCounts)) {
    if (count > 1) {
        console.log(`${id}: ${count} occurrences`);
    }
}