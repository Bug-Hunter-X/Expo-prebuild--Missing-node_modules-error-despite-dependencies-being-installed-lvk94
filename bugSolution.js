The issue was resolved by ensuring I was running `expo prebuild` from the root directory of my project, where the `package.json` file resides.  Previously, I had mistakenly navigated into a subdirectory before executing the command.  To fix it, I navigated to the project's root directory (containing `package.json`) and then ran `expo prebuild`.  This ensured that Expo CLI could correctly locate the `node_modules` folder.