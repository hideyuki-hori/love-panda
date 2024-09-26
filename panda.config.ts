import { defineConfig } from '@pandacss/dev'
import { badgeRecipe } from './badge.recipe'

export default defineConfig({
  preflight: true,
  include: ['./**/*.{ts,tsx}'],
  exclude: [],
  theme: {
    extend: {
      recipes: {
        badgeRecipe,
      },
    },
  },
  outdir: 'styled-system',
  jsxFramework: 'react',
})