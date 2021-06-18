# Storytests CLI Example

This repository contains example configuration for [storytests-cli](https://github.com/yandex/storytests-cli).

## Configuration

You can discover storytests configuration in [storytests.config.js](./storytests.config.js) with commentary over configuration options. On the high level `storytests-cli` is configured to generate screenshot tests using [`hermione`](https://github.com/gemini-testing/hermione) and [`playwright`](https://playwright.dev) from `*.stories.tsx` files.

You can see `storytests-cli` in action by passing `-r` flag to force rewrite on existing test files. To run actual tests use `STORYBOOK_URL=http://localhost:6006/ yarn playwright` and `yarn hermione:gui` or `yarn hermione:test`.

## Usage in CI

I recommend including `yarn storytests` command before running tests in your CI process to make sure that all new code being pushed to your repository has proper baselines generated for every component. You can see an example of CI failing in PR.

This app was bootstrapped by Create React App and is not designed to provide any value or to even function.
