const fs = require('fs');

const files = [
  'app/topics/[slug]/page.tsx',
  'app/vendors/[slug]/page.tsx',
  'app/issues/[id]/page.tsx',
  'app/jobs/[id]/page.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Replace generateMetadata signature
  content = content.replace(
    /export (async )?function generateMetadata\(\{ params \}: \{ params: \{ (slug|id): string \} \}\) \{/g,
    'export async function generateMetadata({ params }: { params: Promise<{ $2: string }> }) {\n  const resolvedParams = await params;'
  );
  // Replace params.slug or params.id in generateMetadata
  content = content.replace(/params\.(slug|id)/g, 'resolvedParams.$1');

  // Replace default export signature
  content = content.replace(
    /export default (async )?function \w+\(\{\n?\s*params,?\n?\s*\}\: \{\n?\s*params\: \{ (slug|id)\: string \}\n?\s*\}\) \{/g,
    (match, p1, p2) => {
      const funcName = match.match(/function (\w+)/)[1];
      return `export default async function ${funcName}({ params }: { params: Promise<{ ${p2}: string }> }) {\n  const resolvedParams = await params;`;
    }
  );
  content = content.replace(
    /export default (async )?function (\w+)\(\{ params \}: \{ params: \{ (slug|id): string \} \}\) \{/g,
    'export default async function $2({ params }: { params: Promise<{ $3: string }> }) {\n  const resolvedParams = await params;'
  );

  fs.writeFileSync(file, content, 'utf8');
});

console.log('Fixed params in dynamic routes.');
