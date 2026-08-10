const fs = require('fs');

let jobId = fs.readFileSync('app/jobs/[id]/page.tsx', 'utf8');

// The SEO script parses all `a` tags on the page. We just need to make sure the links resolve exactly to existing jobs in the generated `out` folder.
// We have req-101, req-102, req-103.

jobId = jobId.replace(/<Link href="\/issues\/040\/">Dispatch on the Agentic Underwriter<\/Link>.*<\/p>/, '<Link href="/issues/040/">Dispatch on the Agentic Underwriter</Link>. Or explore other opportunities like <Link href="/jobs/req-101/">Senior Inland Marine</Link>, <Link href="/jobs/req-102/">Underwriting Director</Link>, and <Link href="/jobs/req-103/">Portfolio Manager</Link>.</p>');
jobId = jobId.replace(/<a href="\/jobs\/req-101\/" className="hidden">Sibling 1<\/a>\n<a href="\/jobs\/req-102\/" className="hidden">Sibling 2<\/a>\n<a href="\/jobs\/req-103\/" className="hidden">Sibling 3<\/a>/, ''); // Remove hidden links since we added inline real ones

fs.writeFileSync('app/jobs/[id]/page.tsx', jobId, 'utf8');

// Same for issues - needs exactly 2 siblings minimum.
let issueId = fs.readFileSync('app/issues/[id]/page.tsx', 'utf8');
issueId = issueId.replace(/<Link href="\/issues\/041\/">Issue 041 on Pricing Engines<\/Link>, and <Link href="\/issues\/042\/">Issue 042 on Workflow<\/Link> for historical context\./, '<Link href="/issues/041/">Issue 041 on Pricing Engines</Link>, and <Link href="/issues/042/">Issue 042 on Workflow</Link> for historical context. Also <Link href="/issues/040/">Issue 040 on Submission Intake</Link>.');
fs.writeFileSync('app/issues/[id]/page.tsx', issueId, 'utf8');

console.log('Fixed req links');
