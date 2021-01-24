# DiscountCalculatorWeb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

# Copy the build folder to nginx serviceable folder
cp dist/discount-calculator-web /srv/discount-calculator-web
chmod 777 /srv/discount-calculator-web
chcon -R -t httpd_sys_content_t /srv/discount-calculator-web/

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Firebase deployment
Project Console: https://console.firebase.google.com/project/discount-calculator-web/overview
Hosting URL: https://discount-calculator-web.web.app


## How to do firebase deployment
[rudhin@localhost discount-calculator-web]$ firebase init

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

  /home/rudhin/Workspaces/git-repos/discount-calculator-web/discount-calculator-web

? Which Firebase CLI features do you want to set up for this folder? Press Space to select features, then Enter to confirm your choices. Hosting: Configure and deploy Firebase Hosting sites

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add, 
but for now we'll just set up a default project.

? Please select an option: Create a new project
i  If you want to create a project in a Google Cloud organization or folder, please use "firebase projects:create" instead, and return to this command when you've created the project.
? Please specify a unique project id (warning: cannot be modified afterward) [6-30 characters]:
 discount-calculator-web
? What would you like to call your project? (defaults to your project ID) discount-calculator-web
✔ Creating Google Cloud Platform project
✔ Adding Firebase resources to Google Cloud Platform project

🎉🎉🎉 Your Firebase project is ready! 🎉🎉🎉

Project information:
   - Project ID: discount-calculator-web
   - Project Name: discount-calculator-web

Firebase console is available at
https://console.firebase.google.com/project/discount-calculator-web/overview
i  Using project discount-calculator-web (discount-calculator-web)

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? dist/discount-calculator-web
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
? Set up automatic builds and deploys with GitHub? Yes
? File dist/discount-calculator-web/index.html already exists. Overwrite? No
i  Skipping write of dist/discount-calculator-web/index.html

i  Detected a .git folder at /home/rudhin/Workspaces/git-repos/discount-calculator-web
i  Authorizing with GitHub to upload your service account to a GitHub repository's secrets store.

Visit this URL on this device to log in:
https://github.com/login/oauth/authorize?client_id=89cf50f02ac6aaed3484&state=999237554&redirect_uri=http%3A%2F%2Flocalhost%3A9005&scope=read%3Auser%20repo%20public_repo

Waiting for authentication...

✔  Success! Logged into GitHub as menonrudhin

? For which GitHub repository would you like to set up a GitHub workflow? (format: user/repository) menonrudhin/discount-calculator-web

✔  Created service account github-action-318685980 with Firebase Hosting admin permissions.
✔  Uploaded service account JSON to GitHub as secret FIREBASE_SERVICE_ACCOUNT_DISCOUNT_CALCULATOR_WEB.
i  You can manage your secrets at https://github.com/menonrudhin/discount-calculator-web/settings/secrets.

? Set up the workflow to run a build script before every deploy? Yes
? What script should be run before every deploy? ng build --prod

✔  Created workflow file /home/rudhin/Workspaces/git-repos/discount-calculator-web/.github/workflows/firebase-hosting-pull-request.yml
? Set up automatic deployment to your site's live channel when a PR is merged? Yes
? What is the name of the GitHub branch associated with your site's live channel? master

✔  Created workflow file /home/rudhin/Workspaces/git-repos/discount-calculator-web/.github/workflows/firebase-hosting-merge.yml

i  Action required: Visit this URL to revoke authorization for the Firebase CLI GitHub OAuth App:
https://github.com/settings/connections/applications/89cf50f02ac6aaed3484
i  Action required: Push any new workflow file(s) to your repo

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...

✔  Firebase initialization complete!
[rudhin@localhost discount-calculator-web]$ firebase deploy^C
[rudhin@localhost discount-calculator-web]$ ng build --prod
✔ Browser application bundle generation complete.
✔ Copying assets complete.
✔ Index html generation complete.

Initial Chunk Files               | Names         |      Size
main.75441bfd8463dec2abd3.js      | main          | 361.43 kB
styles.32d843a71366612d22b9.css   | styles        | 140.64 kB
polyfills.d1aec6c43f3be0777851.js | polyfills     |  36.66 kB
runtime.359d5ee4682f20e936e9.js   | runtime       |   1.45 kB

                                  | Initial Total | 540.18 kB

Build at: 2021-01-24T00:46:01.709Z - Hash: ca91a5eda3e7ef29b43a - Time: 70861ms

Warning: budgets: initial exceeded maximum budget. Budget 500.00 kB was not met by 40.18 kB with a total of 540.18 kB.


[rudhin@localhost discount-calculator-web]$ firebase deploy

=== Deploying to 'discount-calculator-web'...

i  deploying hosting
i  hosting[discount-calculator-web]: beginning deploy...
i  hosting[discount-calculator-web]: found 7 files in dist/discount-calculator-web
✔  hosting[discount-calculator-web]: file upload complete
i  hosting[discount-calculator-web]: finalizing version...
✔  hosting[discount-calculator-web]: version finalized
i  hosting[discount-calculator-web]: releasing new version...
✔  hosting[discount-calculator-web]: release complete

✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/discount-calculator-web/overview
Hosting URL: https://discount-calculator-web.web.app
