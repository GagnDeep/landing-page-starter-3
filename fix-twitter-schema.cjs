const fs = require('fs');
let schemaFile = fs.readFileSync('lib/json-ld.ts', 'utf8');
schemaFile = schemaFile.replace(/https:\/\/twitter\.com\/underwritingdesk/g, 'https://twitter.com/theinstitutes');
fs.writeFileSync('lib/json-ld.ts', schemaFile, 'utf8');

console.log('Fixed twitter schema');
