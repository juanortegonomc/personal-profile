# Nx Mono-Repo Setup Guide — React Applications
## Prerequisites
```bash
# Ensure you have Node.js 18+ installed
node --version
# Install Nx CLI globally
npm install -g nx@latest
# Verify installation
nx --version
```
## STEP 1 — Create the Nx Workspace
```bash
npx create-nx-workspace@latest my-org --preset=empty
```
You will be prompted with the following options:
```bash
✔ Where would you like to create your workspace? · my-org
✔ Which stack do you want to use? · none
✔ Package-based or integrated? · integrated   # ← Choose this
✔ Enable distributed caching with Nx Cloud? · No
```
```bash
cd my-org
```
## STEP 2 — Add React Support
```bash
npm install --save-dev @nx/react
npm install --save-dev @nx/jest
```
## STEP 3 — Create the 4 React Applications
### App 1
```bash
nx generate @nx/react:application apps/app-one \
  --style=scss \
  --routing=true \
  --bundler=vite \
  --unitTestRunner=jest \
  --e2eTestRunner=none \
  --tags="scope:app-one,owner:dev1"
```
### App 2
```bash
nx generate @nx/react:application apps/app-two \
  --style=scss \
  --routing=true \
  --bundler=vite \
  --unitTestRunner=jest \
  --e2eTestRunner=none \
  --tags="scope:app-two,owner:dev2"
```
### App 3
```bash
nx generate @nx/react:application apps/app-three \
  --style=scss \
  --routing=true \
  --bundler=vite \
  --unitTestRunner=jest \
  --e2eTestRunner=none \
  --tags="scope:app-three,owner:dev3"
```
### App 4
```bash
nx generate @nx/react:application apps/app-four \
  --style=scss \
  --routing=true \
  --bundler=vite \
  --unitTestRunner=jest \
  --e2eTestRunner=none \
  --tags="scope:app-four,owner:dev4"
```
## STEP 4 — Create Shared Libraries
> Use `--bundler=none` for all internal shared libraries since the app's own
> bundler (Vite) handles compilation. Only use `tsc` or `rollup` if you plan
> to publish the library to npm.
### Shared UI Components
```bash
nx generate @nx/react:library libs/shared/ui \
  --style=scss \
  --unitTestRunner=jest \
  --tags="scope:shared,type:ui" \
  --bundler=none \
  --component=false
```
### Shared Utility Functions
```bash
nx generate @nx/js:library libs/shared/utils \
  --unitTestRunner=jest \
  --tags="scope:shared,type:utils" \
  --bundler=none
```
### Shared Data Access / API
```bash
nx generate @nx/js:library libs/shared/data-access \
  --unitTestRunner=jest \
  --tags="scope:shared,type:data-access" \
  --bundler=none
```
### Shared Types / Interfaces
```bash
nx generate @nx/js:library libs/shared/types \
  --unitTestRunner=jest \
  --tags="scope:shared,type:types" \
  --bundler=none
```
## STEP 5 — Final Folder Structure
```
my-org/
├── apps/
│   ├── app-one/
│   │   ├── src/
│   │   │   ├── app/
│   │   │   └── main.tsx
│   │   ├── project.json
│   │   └── vite.config.ts
│   ├── app-two/
│   ├── app-three/
│   └── app-four/
│
├── libs/
│   └── shared/
│       ├── ui/
│       │   └── src/index.ts
│       ├── utils/
│       │   └── src/index.ts
│       ├── data-access/
│       │   └── src/index.ts
│       └── types/
│           └── src/index.ts
│
├── .github/
│   └── CODEOWNERS
├── .eslintrc.json
├── nx.json
├── tsconfig.base.json
└── package.json
```
## STEP 6 — Using Shared Libraries in Your Apps
Nx auto-registers path aliases in `tsconfig.base.json`:
```json
{
  "compilerOptions": {
    "paths": {
      "@my-org/shared/ui": ["libs/shared/ui/src/index.ts"],
      "@my-org/shared/utils": ["libs/shared/utils/src/index.ts"],
      "@my-org/shared/data-access": ["libs/shared/data-access/src/index.ts"],
      "@my-org/shared/types": ["libs/shared/types/src/index.ts"]
    }
  }
}
```
Import shared libs in any app like this:
```tsx
// apps/app-one/src/app/app.tsx
import { Button, Header } from '@my-org/shared/ui';
import { formatDate } from '@my-org/shared/utils';
import { fetchUsers } from '@my-org/shared/data-access';
import { User } from '@my-org/shared/types';
```--
## STEP 7 — Enforce Module Boundaries
Edit `.eslintrc.json` at the root level:
```json
{
  "root": true,
  "plugins": ["@nx"],
  "rules": {
    "@nx/enforce-module-boundaries": [
      "error",
      {
        "enforceBuildableLibDependency": true,
        "allow": [],
        "depConstraints": [
          {
            "sourceTag": "scope:app-one",
            "onlyDependOnLibsWithTags": ["scope:shared", "scope:app-one"]
          },
          {
            "sourceTag": "scope:app-two",
            "onlyDependOnLibsWithTags": ["scope:shared", "scope:app-two"]
          },
          {
            "sourceTag": "scope:app-three",
            "onlyDependOnLibsWithTags": ["scope:shared", "scope:app-three"]
          },
          {
            "sourceTag": "scope:app-four",
            "onlyDependOnLibsWithTags": ["scope:shared", "scope:app-four"]
          },
          {
            "sourceTag": "scope:shared",
            "onlyDependOnLibsWithTags": ["scope:shared"]
          }
        ]
      }
    ]
  }
}
```
## STEP 8 — Set Up Code Ownership
```bash
mkdir -p .github && touch .github/CODEOWNERS
```
```
# .github/CODEOWNERS
# Global fallback
*                         @tech-lead
# Each developer owns their app
/apps/app-one/            @dev-juan
/apps/app-two/            @dev-maria
/apps/app-three/          @dev-carlos
/apps/app-four/           @dev-ana
# Shared libs require tech lead approval
/libs/shared/             @tech-lead
```
## STEP 9 — Key Nx Commands Reference
```bash
# ── SERVE ──────────────────────────────────────────────
nx serve app-one            # Run app-one locally
nx serve app-two            # Run app-two locally
# ── BUILD ──────────────────────────────────────────────
nx build app-one            # Build a specific app
nx run-many -t build        # Build ALL apps at once
# ── TEST ───────────────────────────────────────────────
nx test app-one             # Test a specific app
nx test shared-ui           # Test a shared library
nx run-many -t test         # Test everything
# ── LINT ───────────────────────────────────────────────
nx lint app-one             # Lint a specific app
nx run-many -t lint         # Lint everything
# ── AFFECTED (most powerful feature) ───────────────────
nx affected -t build        # Only build what your changes affect
nx affected -t test         # Only test what your changes affect
nx affected -t lint         # Only lint what your changes affect
# ── VISUALIZE DEPENDENCY GRAPH ─────────────────────────
nx graph                    # Opens interactive graph in browser
```
## STEP 10 — Git Setup & Push
```bash
git init
git add .
git commit -m "chore: initialize nx mono-repo with 4 react apps"
git remote add origin https://github.com/your-org/my-org.git
git push -u origin main
```

## Summary Checklist
| Step | Action                      | Command                          |
|------|-----------------------------|----------------------------------|
| 1    | Create Nx Workspace         | `npx create-nx-workspace`        |
| 2    | Add React plugin            | `npm i -D @nx/react`             |
| 3    | Generate 4 React apps       | `nx g @nx/react:application`     |
| 4    | Generate shared libs        | `nx g @nx/js:library --bundler=none` |
| 5    | Verify folder structure     | `nx graph`                       |
| 6    | Import shared libs in apps  | Use `@my-org/shared/ui` etc.     |
| 7    | Enforce boundaries          | Configure `.eslintrc.json`       |
| 8    | Set up CODEOWNERS           | `.github/CODEOWNERS`             |
| 9    | Learn Nx commands           | `nx affected`, `nx run-many`     |
| 10   | Push to Git                 | `git push`                       |--
> 
 Pro Tip: Run `nx graph` at any time to get a visual map of all apps and
> their dependencies. It is incredibly useful for understanding how everything
> connects