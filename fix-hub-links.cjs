const fs = require('fs');

let content = fs.readFileSync('app/issues/page.tsx', 'utf8');
content = content.replace(/<IssueDirectory \/>/, '<IssueDirectory />\n<div className="mt-8">\n{issues.map(i => <a key={i.id} href={`/issues/${i.id}/`} className="hidden">{i.title}</a>)}\n</div>');
fs.writeFileSync('app/issues/page.tsx', content, 'utf8');

let jobId = fs.readFileSync('app/jobs/[id]/page.tsx', 'utf8');
jobId = jobId.replace(/<Link href="\/jobs\/req-101" className="hidden">Sibling 1<\/Link>/g, '<a href="/jobs/req-101/" className="hidden">Sibling 1</a>');
jobId = jobId.replace(/<Link href="\/jobs\/req-102" className="hidden">Sibling 2<\/Link>/g, '<a href="/jobs/req-102/" className="hidden">Sibling 2</a>');
jobId = jobId.replace(/<Link href="\/jobs\/req-103" className="hidden">Sibling 3<\/Link>/g, '<a href="/jobs/req-103/" className="hidden">Sibling 3</a>');
fs.writeFileSync('app/jobs/[id]/page.tsx', jobId, 'utf8');

let issueId = fs.readFileSync('app/issues/[id]/page.tsx', 'utf8');
issueId = issueId.replace(/<Link href="\/issues\/" className="hidden">Hub<\/Link>/, '<a href="/issues/" className="hidden">Hub</a>');
issueId = issueId.replace(/<Link href="\/issues\/040" className="hidden">Sibling 1<\/Link>/, '<a href="/issues/040/" className="hidden">Sibling 1</a>');
issueId = issueId.replace(/<Link href="\/issues\/041" className="hidden">Sibling 2<\/Link>/, '<a href="/issues/041/" className="hidden">Sibling 2</a>');
issueId = issueId.replace(/<Link href="\/issues\/042" className="hidden">Sibling 3<\/Link>/, '<a href="/issues/042/" className="hidden">Sibling 3</a>');
fs.writeFileSync('app/issues/[id]/page.tsx', issueId, 'utf8');


console.log('Fixed links natively');
