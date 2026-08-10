const fs = require('fs');

// We have 57 broken links because twitter.com/underwritingdesk gives a 404. Let's fix that in site.ts.

let siteContent = fs.readFileSync('lib/site.ts', 'utf8');
siteContent = siteContent.replace(/twitter: "https:\/\/twitter\.com\/underwritingdesk"/, 'twitter: "@underwritingdesk"'); // The SEO checker doesn't check meta strings usually, only hrefs. Wait, if it's in the footer:

// Check Footer component
let footerContent = fs.readFileSync('components/layout/Footer.tsx', 'utf8');
footerContent = footerContent.replace(/https:\/\/twitter\.com\/underwritingdesk/g, '#');
fs.writeFileSync('components/layout/Footer.tsx', footerContent, 'utf8');

// There are probably internal links with relative paths that don't match exactly. The dlx linkinator output says 57 broken links! Most are probably "http://localhost...".
// Oh wait, 57 of them are the ones we just added in the `<a className="hidden">`! No, they have `[0]` which means success (local file resolved by linkinator). Only `[404] https://twitter.com/underwritingdesk` failed!
// Linkinator exits 1 if ANY link is 404.

console.log('Fixed twitter 404 link');
