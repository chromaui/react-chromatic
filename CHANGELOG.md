# 0.7.11 - 2017-02-22

* Handle the case where the last few Chromatic builds were run against commits which are no longer in the repository (due to rebasing or squashing). This could cause the tool to crash or fail to find a baseline for a build.

* Add a `--url` argument to allow running tests against arbitrary running apps.

# 0.7.10 - 2017-02-22

* Small API change for querying build change counts.

# 0.7.9 - 2017-01-23

* Our test script now warns you if your storybook logs any errors. This can sometimes help reveal subtle problems that are caused by the script evaluating your storybook in JSDOM. If you have legitimate things logged to `console.error` this may cause noise---you should probably get rid of them.

# 0.7.8 - 2017-01-18

* We no longer write your app code to your `package.json` by default; instead we prefer you pass it via the `CHROMATIC_APP_CODE` environment variable. (You can still optionally use `--app-code=xyz` if you are comfortable with the security of your `package.json`).

* We now show the final part of your Story's kind as the component name in the Chromatic UI. So "Webapp/UserList" will appear in Chromatic as "UserList".

# 0.7.7 - 2017-12-21

* This version sends us a little more information about the environment the package runs in -- is it CI? which package version?

# 0.7.6 - 2017-12-19

* Fix an issue where we did not pass the context to stories in the right format.

# 0.7.5 - 2017-12-19

* We detect a running process on your app's port and don't try and start the app if so. Pass `--do-not-start` if you've already started the app.

# 0.7.3 - 2017-12-09

* We now upload your application bundle to our tunnel server directly from the package.
  This means that on slower uplinks, we no need to set arbitrary timeouts in our server process; instead we simply will not start your Chromatic build until we've verified the bundle has uploaded successfully.
