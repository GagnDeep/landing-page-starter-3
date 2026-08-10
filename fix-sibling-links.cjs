const fs = require('fs');

let jobsContent = fs.readFileSync('content/jobs.ts', 'utf8');
jobsContent = jobsContent.replace(
  /\n\s*applyUrl: "https:\/\/chubb\.com\/careers"/,
  ''
);
fs.writeFileSync('content/jobs.ts', jobsContent, 'utf8');

console.log('Fixed sibling links by fixing TS error');
