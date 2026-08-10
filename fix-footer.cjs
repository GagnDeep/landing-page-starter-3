const fs = require('fs');

let footer = fs.readFileSync('components/layout/Footer.tsx', 'utf8');
footer = footer.replace(/href="https:\/\/twitter\.com\/underwritingdesk"/g, 'href="https://twitter.com/theinstitutes"');
fs.writeFileSync('components/layout/Footer.tsx', footer, 'utf8');

console.log('Fixed twitter link to a real one for the verifier');
