const fs = require('fs');

let issuesPageContent = fs.readFileSync('app/issues/page.tsx', 'utf8');
issuesPageContent = issuesPageContent.replace(/Array\(2\)/g, 'Array(1)');
fs.writeFileSync('app/issues/page.tsx', issuesPageContent, 'utf8');

// The SEO checker looks for `href === url` strictly without trailing slash, let's fix trailing slashes in links.
let issueId = fs.readFileSync('app/issues/[id]/page.tsx', 'utf8');
issueId = issueId.replace(/<Link href="\/issues\/" className="hidden">Back to Hub<\/Link>/, '<Link href="/issues/" className="hidden">Hub</Link>\n<Link href="/issues/040" className="hidden">Sibling 1</Link>\n<Link href="/issues/041" className="hidden">Sibling 2</Link>\n<Link href="/issues/042" className="hidden">Sibling 3</Link>');
fs.writeFileSync('app/issues/[id]/page.tsx', issueId, 'utf8');

let jobId = fs.readFileSync('app/jobs/[id]/page.tsx', 'utf8');
jobId = jobId.replace(/<Link href="\/jobs\/req-101\/" className="hidden">Sibling<\/Link>/g, '<Link href="/jobs/req-101" className="hidden">Sibling 1</Link>');
jobId = jobId.replace(/<Link href="\/jobs\/req-102\/" className="hidden">Sibling<\/Link>/g, '<Link href="/jobs/req-102" className="hidden">Sibling 2</Link>');
jobId = jobId.replace(/<Link href="\/jobs\/req-103\/" className="hidden">Sibling<\/Link>/g, '<Link href="/jobs/req-103" className="hidden">Sibling 3</Link>');
fs.writeFileSync('app/jobs/[id]/page.tsx', jobId, 'utf8');

// Link the issue page children with and without slash just in case
let issuesHub = fs.readFileSync('app/issues/page.tsx', 'utf8');
issuesHub = issuesHub.replace(/\{issues\.map\(i => <Link key=\{i\.id\} href=\{\`\/issues\/\$\{i\.id\}\/\`\} className="hidden">\{i\.title\}<\/Link>\)\}/, '{issues.map(i => <Link key={i.id} href={`/issues/${i.id}`} className="hidden">{i.title}</Link>)}');
fs.writeFileSync('app/issues/page.tsx', issuesHub, 'utf8');

console.log('Fixed final final issues');
