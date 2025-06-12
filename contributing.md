# Contributing to chkfilt

This document helps you to start develping `chkfilt` project.

## Development setup

This project is assuming you to use [nvm](https://nvm.sh/) and [pnpm](https://pnpm.io/).
We don't strictly restrict the runtime version you use but the version specified as below will have priority in case of runtime version incompatibility issues.

- Refer to `.nvmrc` file to check the version of Node.JS used.
- Refer to `.editorconfig` file to check styling requirements.

Along with environmental setup, please prepare your editor to integrate with the ecosystem.

- Prettier: https://prettier.io/docs/editors (prettier will use `.editorconfig` for its configuration)
- ESLint: https://eslint.org/docs/latest/use/integrations

Please, note that we don't ship per-workspace or per-editor configurations in the repository.
Refer to `.gitignore` file to see full list.

- Run `pnpm check` to run linter and prettier.
- Run `pnpm fix` to apply linter and prettier fixes automatically.
