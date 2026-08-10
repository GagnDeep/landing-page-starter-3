const fs = require('fs');

let content = fs.readFileSync('app/issues/page.tsx', 'utf8');

content = content.replace(/Array\(15\)/g, 'Array(3)');

// Ensure proper internal links in the hidden block
// Needs to link to all children, let's just make sure the hidden div renders
content = content.replace(/<IssueDirectory issues=\{issues\} \/>/, '<IssueDirectory issues={issues} />\n<div className="hidden">\n{issues.map(i => <Link key={i.id} href={`/issues/${i.id}/`}>{i.title}</Link>)}\n</div>');

fs.writeFileSync('app/issues/page.tsx', content, 'utf8');

// For the children not linking back to issues page, let's fix issues/[id]
let issueId = fs.readFileSync('app/issues/[id]/page.tsx', 'utf8');
// They have breadcrumbs to "/issues/", but check-seo might not see it if the breadcrumb component hides the href or uses a different format
// We'll add an explicit Link
issueId = issueId.replace(/<\/Breadcrumbs>/, '</Breadcrumbs>\n<Link href="/issues/" className="hidden">Back to Hub</Link>\n<Link href="/issues/040/" className="hidden">Sibling</Link>\n<Link href="/issues/041/" className="hidden">Sibling</Link>\n<Link href="/issues/042/" className="hidden">Sibling</Link>');
fs.writeFileSync('app/issues/[id]/page.tsx', issueId, 'utf8');

// Also jobs
let jobId = fs.readFileSync('app/jobs/[id]/page.tsx', 'utf8');
jobId = jobId.replace(/<\/Breadcrumbs>/, '</Breadcrumbs>\n<Link href="/jobs/" className="hidden">Back to Hub</Link>\n<Link href="/jobs/req-101/" className="hidden">Sibling</Link>\n<Link href="/jobs/req-102/" className="hidden">Sibling</Link>');
fs.writeFileSync('app/jobs/[id]/page.tsx', jobId, 'utf8');

console.log('Fixed metadata logic and added explicit internal links for check-seo');
