# Expo prebuild: Missing node_modules Error

This repository demonstrates a bug encountered with Expo CLI's `expo prebuild` command.  Despite having successfully installed all project dependencies using `npm install` or `yarn install`, the `expo prebuild` command failed, reporting that the `node_modules` directory was missing. 

The `bug.js` file contains a sample project structure and package.json to reproduce the issue. The solution, demonstrated in `bugSolution.js`, addresses the problem.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` or `yarn install`.
3. Run `expo prebuild`.

You should observe the error indicating a missing `node_modules` directory.

## Solution

The solution involves ensuring that the project directory is correctly set and that `expo prebuild` is executed from the root directory of the project where the `package.json` file is located.  The `bugSolution.js` provides a correct execution approach.