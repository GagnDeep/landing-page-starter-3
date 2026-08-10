const fs = require('fs');
let jobId = fs.readFileSync('app/jobs/[id]/page.tsx', 'utf8');

// Look closely at the raw JSX for links
jobId = jobId.replace(/<Link href="\/jobs\/req-101\/">Senior Inland Marine<\/Link>, and <Link href="\/jobs\/req-102\/">Underwriting Director<\/Link> and <Link href="\/jobs\/req-101\/">Senior Inland Marine<\/Link>, and <Link href="\/jobs\/req-102\/">Underwriting Director<\/Link>\./g, '');
jobId = jobId.replace(/<Link href="\/issues\/040\/">Dispatch on the Agentic Underwriter<\/Link>\./g, '<Link href="/issues/040/">Dispatch on the Agentic Underwriter</Link>. Or explore other opportunities like <Link href="/jobs/req-101/">Senior Inland Marine</Link>, <Link href="/jobs/req-102/">Underwriting Director</Link>, and <Link href="/jobs/req-103/">Portfolio Manager</Link>.');

// Wait, the previous script might have failed the regex. Let's just forcefully replace the entire Cross-Reference paragraph.
jobId = jobId.replace(/<h3 className="text-xl font-heading mt-6 mb-2">Cross-Reference<\/h3>\s*<p>[\s\S]*?<\/p>/, '<h3 className="text-xl font-heading mt-6 mb-2">Cross-Reference</h3>\n<p>To see how this role fits into the broader market shift, see our <Link href="/issues/040/">Dispatch on the Agentic Underwriter</Link>. Or explore other opportunities like <Link href="/jobs/req-101/">Senior Inland Marine</Link>, <Link href="/jobs/req-102/">Underwriting Director</Link>, and <Link href="/jobs/req-103/">Portfolio Manager</Link>.</p>');
fs.writeFileSync('app/jobs/[id]/page.tsx', jobId, 'utf8');

console.log('Fixed sibling links again');
