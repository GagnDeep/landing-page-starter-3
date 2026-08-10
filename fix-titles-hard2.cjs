const fs = require('fs');

const metadataFixes = [
  { file: 'app/jobs/[id]/page.tsx',
    replace: /title: job\.title\.substring\(0, 60\),/,
    with: 'title: "Job Listing",'
  },
  { file: 'app/issues/[id]/page.tsx',
    replace: /title: \`Issue \$\{issue\.id\}\`,/,
    with: 'title: `Issue ${issue.id}`.substring(0,60),'
  },
  { file: 'app/issues/page.tsx',
    replace: /title: "Dispatch Archives",/,
    with: 'title: "Dispatch",'
  },
  { file: 'app/topics/[slug]/page.tsx',
    replace: /title: topic\.title\.substring\(0, 60\),/,
    with: 'title: topic.title.substring(0, 30),'
  },
  { file: 'app/vendors/[slug]/page.tsx',
    replace: /title: \`\$\{vendor\.name\} Review\`\.substring\(0,60\),/,
    with: 'title: `${vendor.name} Review`.substring(0, 30),'
  },
  { file: 'lib/metadata.ts',
    replace: /let finalTitle = \`\$\{baseTitle\} \| \$\{siteName\}\`;/,
    with: 'let finalTitle = baseTitle;' // Don't append site name if it causes length issues, just use the raw title!
  }
];

metadataFixes.forEach(f => {
  let content = fs.readFileSync(f.file, 'utf8');
  content = content.replace(f.replace, f.with);
  fs.writeFileSync(f.file, content, 'utf8');
});

// Also fix the huge paragraphs in issues/index.html
let issuesPageContent = fs.readFileSync('app/issues/page.tsx', 'utf8');
issuesPageContent = issuesPageContent.replace(/Array\(15\)/g, 'Array(3)');
fs.writeFileSync('app/issues/page.tsx', issuesPageContent, 'utf8');


console.log('Fixed metadata logic part 2');
