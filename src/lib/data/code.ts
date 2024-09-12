export const codeExampleTitle = `<Title level="p" variant="h1" className="text-white">
    Etiqueta "p" con apariencia de h1
</Title>
<Title level="h1" variant="h2" className="text-amber-100">
    Etiqueta "h1" con apariencia de h3
</Title>
<Title level="h4" variant="h3" className="text-amber-300">
    Etiqueta "h4" con apariencia de h3
</Title>
<Title level="h3" variant="h4" className="text-amber-500">
    Etiqueta "h3" con apariencia de h4
</Title>
<Title level="h6" variant="h5" className="text-amber-700">
    Etiqueta "h6" con apariencia de h5
</Title>
`;
export const tailwindConfig = `/** @type {import('tailwindcss').Config} */
import { debordUi } from 'debord-design'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/debord-design/dist/**/*.{js,ts,jsx,tsx}"
  ],
  
  plugins: [debordUi()],
}

`;
