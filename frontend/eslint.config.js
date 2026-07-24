import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      // Permite os exports de dados do react-router (loader/action) co-locados
      // com o componente, sem quebrar a regra de Fast Refresh.
      'react-refresh/only-export-components': [
        'error',
        { allowConstantExport: true, allowExportNames: ['loader', 'action', 'meta'] },
      ],
    },
  },
])
