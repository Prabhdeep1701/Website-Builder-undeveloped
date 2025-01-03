import { Website } from '../types';

export async function generateHTML(website: Website): string {
  const componentsHTML = website.components
    .map(component => {
      // Generate static HTML for each component
      const props = JSON.stringify(component.props);
      return `<div data-component="${component.type}" data-props='${props}'></div>`;
    })
    .join('\n');

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${website.title}</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2/dist/tailwind.min.css" rel="stylesheet">
</head>
<body>
    ${componentsHTML}
</body>
</html>
  `.trim();
}