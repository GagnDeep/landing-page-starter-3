const fs = require('fs');
let site = fs.readFileSync('lib/site.ts', 'utf8');
site = site.replace(/twitter: "@underwritingdesk"/, 'twitter: "https://twitter.com/theinstitutes"');
fs.writeFileSync('lib/site.ts', site, 'utf8');

// The output from linkinator says it found https://twitter.com/underwritingdesk.
// That means it's still somewhere in the code! Let's search for it.
