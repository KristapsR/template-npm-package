# Typescript template for NPM package

## Features

- Linting using `tsc`
- Testing using `vitest`
- Npm package issue test using `arethetypeswrong`
- Versioning using `chagesets`
- Publishing to npm
- Github actions (test, lint, build, attw, publishing)
- Release using `turborepo`

## Suggestions for package development

- Use `relative-deps`to update dependencies for parent app
- Skip GitHub workflows by adding `[skip ci]` to end of commit message
