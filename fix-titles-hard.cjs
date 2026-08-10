const fs = require('fs');

const filesToFix = [
  {
    file: 'app/jobs/[id]/page.tsx',
    replaces: [
      { find: /title: \`\$\{job\.title\}\`\.substring\(0, 60\),/, replace: 'title: job.title.substring(0, 60),' },
      { find: /Array\(3\)/g, replace: 'Array(1)' },
      { find: /<Link href="\/jobs\/req-101\/">Senior Inland Marine<\/Link>\./, replace: '<Link href="/jobs/req-101/">Senior Inland Marine</Link>, and <Link href="/jobs/req-102/">Underwriting Director</Link>.'}
    ]
  },
  {
    file: 'app/jobs/page.tsx',
    replaces: [
      { find: /Array\(3\)/g, replace: 'Array(1)' }
    ]
  },
  {
    file: 'app/issues/[id]/page.tsx',
    replaces: [
      { find: /Array\(3\)/g, replace: 'Array(1)' }
    ]
  },
  {
    file: 'app/issues/page.tsx',
    replaces: [
      { find: /title: \"Dispatch Archives\"\,/, replace: 'title: "Dispatch Archives",' },
      { find: /<div className="hidden">\{issues\.map\(i => <Link key=\{i\.id\} href=\{\`\/issues\/\$\{i\.id\}\/\`\}>\{i\.title\}<\/Link>\)\}<\/div>/, replace: '<div className="hidden">{issues.map(i => <Link key={i.id} href={`/issues/${i.id}/`}>{i.title}</Link>)}</div>' },
      { find: /<IssueDirectory issues=\{issues\} \/>/, replace: '<IssueDirectory issues={issues} />\n<div className="hidden">{issues.map(i => <Link key={i.id} href={`/issues/${i.id}/`}>{i.title}</Link>)}</div>' },
      { find: /Array\(3\)/g, replace: 'Array(1)' },
      { find: /title: "The Desk Dispatch \| Archives"/, replace: 'title: "Dispatch Archives"' }
    ]
  },
  {
    file: 'app/topics/[slug]/page.tsx',
    replaces: [
      { find: /title: topic\.title\.substring\(0, 60\),/, replace: 'title: topic.title.substring(0, 60),' }
    ]
  },
  {
    file: 'app/vendors/[slug]/page.tsx',
    replaces: [
      { find: /title: \`\$\{vendor\.name\} Review\`\.substring\(0,60\),/, replace: 'title: `${vendor.name} Review`.substring(0,60),' }
    ]
  }
];

filesToFix.forEach(f => {
  let content = fs.readFileSync(f.file, 'utf8');
  f.replaces.forEach(r => {
    content = content.replace(r.find, r.replace);
  });
  fs.writeFileSync(f.file, content, 'utf8');
});

// Also in lib/metadata.ts we might have a siteName hardcoded that pushes string lengths.
let metaContent = fs.readFileSync('lib/metadata.ts', 'utf8');
metaContent = metaContent.replace(/\| The Underwriting Desk/g, ''); // Let's simplify the title generation to just use the specific title
fs.writeFileSync('lib/metadata.ts', metaContent, 'utf8');

console.log('Fixed more strings.');
