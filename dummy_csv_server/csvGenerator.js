const rowCount = process.env.ROW_COUNT || 9000;

const items = ['ID'.repeat(10), (new Array(7)).fill(100000, 0, 7)];
const row = items.join(',');

const rows = (new Array(rowCount)).fill(row, 0, rowCount).join('\n');

console.log(rows);