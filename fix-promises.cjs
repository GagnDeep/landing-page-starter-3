const fs = require('fs');

const files = [
  'app/topics/[slug]/page.tsx',
  'app/vendors/[slug]/page.tsx',
  'app/issues/[id]/page.tsx',
  'app/jobs/[id]/page.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  content = content.replace(/const resolvedParams = await params;\n  const resolvedParams = await params;/g, 'const resolvedParams = await params;');

  fs.writeFileSync(file, content, 'utf8');
});

console.log('Fixed metadata params.');
