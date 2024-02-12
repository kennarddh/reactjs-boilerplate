# React JS Boilerplate

## Guide

### Install Dependencies

```bash
npm install
```

### Environment Variables

All environment variables for react application must start with `APP_` prefix

To change env prefix change add or remove string from `envPrefix` variable in [`vite.config.json`](./vite.config.ts)

Environtment variables can be accesed using `env.<name>` or [`import.meta.env.<name>`](https://vitejs.dev/guide/env-and-mode.html). Prefix must be included.

Declare env types in `src/env.d.ts` in `ImportMetaEnv` interface

The environment variables can be found and modified in the `.env` file. They come with these default values:

```bash
# Port number (optional, default: 3000)
PORT=3000

# Open browser on start (optional, default: true) if value is other than "true" it will be read as false
OPEN_BROWSER=true
```

## Available Scripts

In the project directory, you can run:

### Start

Start development build

```bash
npm start
```

### Build

build for production.

```bash
npm run build
```

### Preview

Preview production build

```bash
npm run preview
```

### Clean

Removes all the files generated by the build process.

```bash
npm run clean
```

### Lint Check

Finds errors in your code.

```bash
npm run lint:check
```

### Lint Fix

Fix linting errors.

```bash
npm run lint:fix
```

### Lint Staged

Fix staged code linting errors.

```bash
npm run lint:staged
```

### Prettier Fix

Fix the code formatting.

```bash
npm run prettier:fix
```

### Prettier Check

Check the code formatting.

```bash
npm run prettier:check
```

## Notes

-   [`tsconfig.json`](./tsconfig.json) is for react app typescript configuration.
-   [`tsconfig.node.json`](./tsconfig.node.json) is for vite and other development tools typescript configuration that will not be included in build result.
-   If you want to add `pre-commit` or `pre-push` git hook you can add the command to run in `.husky/pre-commit` and `.husky/pre-push`.
-   If you want to disable dependabot you need to remove [`.github/dependabot.yml`](./.github/dependabot.yml).
-   If you want to disable codeql analysis you need to remove [`.github/workflows/codeql-analysis.yml`](./.github/workflows/codeql-analysis.yml).
