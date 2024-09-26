import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,

  include: ['./**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  theme: {
    extend: {},
  },
  outdir: 'styled-system',
  jsxFramework: 'react',
})
