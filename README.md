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
node ./src/server/api/bin/run_sql.js ./src/server/db/migrations/--SqlFileName
````

### Setting Up Vite in a new Project
````bash
npm i -D vite
````

**Create File vite Config and vite.js with its contents**

````bash
npm run dev
````

