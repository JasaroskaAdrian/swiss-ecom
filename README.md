# swiss-ecom

## Branching Strategy (GitFlow)

**Start new Work**

````bash
 git checkout dev
 git checkout feature/<scope>   
````

**Production Incident**

````bash
git checkout main
git checkout hotfix/<desc>
````

**Preparing a release**

````bash
git checkout dev
git checkout release/<version> # e.g. release/1.2.0

git checkout main
git tag v<version>
git push origin v<version>
````

### Merge Styles & Rules

- **feature → dev:**  
  - Use **squash merge** to keep `dev` clean (one commit per feature).
  - PR title should follow Conventional Commits, e.g., `feat(cart): add item notes`.

- **release → main:**  
  - Use **merge commit** to preserve full release history.
  - Immediately **tag main** after merge:  
    ```bash
    git tag vX.Y.Z
    git push origin vX.Y.Z
    ```

- **hotfix → main:**  
  - Use **merge commit** (urgent fix stays visible in history).
  - Also **merge back** into `dev` (and into any open `release/*` branch).

- **release → dev (back-merge):**  
  - Merge commit after a release is deployed to keep `dev` in sync.

> **Summary:**  
> - `feature` branches = squash merge  
> - `release` / `hotfix` branches = merge commit  
> - Always tag **main** after release or hotfix

## Developement Scripts
````bash
npm init
````

````bash
npm install
````

````bash
npm run runsql ./src/server/db/migrations/--SqlFileName
````

### Setting Up Vite in a new Project
````bash
npm i -D vite
````

**Create File vite Config and vite.js with its contents**

````bash
npm run dev
````

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
