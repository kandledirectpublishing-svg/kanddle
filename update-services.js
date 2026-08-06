const fs = require('fs');

const processed = JSON.parse(fs.readFileSync('ser-docs-processed.json', 'utf8'));
let servicesTs = fs.readFileSync('src/data/services.ts', 'utf8');

for (const [slug, data] of Object.entries(processed)) {
  const match = servicesTs.match(new RegExp(`{\\s*slug:\\s*'${slug}'[\\s\\S]*?\\n  }`, 'm'));
  if (!match) {
    console.error('Could not find slug entry for:', slug);
    continue;
  }

  const oldEntry = match[0];
  const catMatch = oldEntry.match(/category:\s*'([^']+)'/);
  const titleMatch = oldEntry.match(/title:\s*'([^']+)'/);
  const category = catMatch ? catMatch[1] : '';
  const title = titleMatch ? titleMatch[1] : '';

  const newObj = {
    slug,
    title,
    category,
    shortDescription: data.shortDescription,
    fullDescription: data.fullDescription,
    features: data.features,
    metaTitle: data.metaTitle,
    metaDescription: data.metaDescription,
    whyAuthorsChoose: data.whyChooseUs,
    howItWorks: data.howItWorks,
    whoItsFor: data.whoItsFor,
    faqs: data.faqs
  };

  const newEntryStr = JSON.stringify(newObj, null, 4)
    .replace(/"([^"]+)":/g, '$1:')
    .split('\n')
    .map(line => '  ' + line)
    .join('\n');

  servicesTs = servicesTs.replace(oldEntry, newEntryStr);
}

fs.writeFileSync('src/data/services.ts', servicesTs);
console.log('Successfully updated services.ts!');
