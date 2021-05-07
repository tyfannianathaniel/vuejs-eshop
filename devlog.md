# devlog

<!-- TOC -->

- [devlog](#devlog)
    - [init VueJs project](#init-vuejs-project)
    - [install project dependencies](#install-project-dependencies)
        - [install Vue DevTools](#install-vue-devtools)
        - [install Vue Router](#install-vue-router)
        - [install Vuex](#install-vuex)
    - [development](#development)

<!-- /TOC -->

## init VueJs project

- init the project locally
    - create new project dir: `mkdir /path/to/vuejs-eshop && cd /path/to/vuejsEshop`
    - init npm package: `npm init -y`
    - edit package.json: `sed -i '/name/c\  "name": "vuejs-eshop",' ./package.json`
        - because npm packages should not use camelCase
    - install @vue/cli: `npm i -D @vue/cli`
        - drop vulnerability messages...
    - check installation: `npx vue --version`
    - init vue project: `npx vue create .`
        - select Default (Vue3 Preview) preset
        - to edit default package manager: `npx vue config -s packageManager <yarn|npm>`
    - test project: `yarn serve`

- connect github with codium
    - automatic signing to github does not work with codium (forbidden authentication or error 801)
    - it is necessary to use an ugly workaround:
        - disconnect from github first
        - open this link where vscodium has been replaced by vscode and click to 'continue': https://vscode-auth.github.com/authorize/?callbackUri=vscode://vscode.github-authentication/did-authenticate%253FwindowId%253D1&scope=repo%20workflow&state=4581d083-208b-4e54-bb1c-54036727b4ae&responseType=code&authServer=https://github.com
        - reconnect from github via the displayed form
        - the redirection fails but you should be able to copy the token
        - go back to codium, click on 'sign with github' in the toolbar at the bottom of the window
        - copy the token in the appropriate field
        - that sucks. But it works.
    - -> solution: https://github.com/VSCodium/vscodium/issues/401
    - -> solution: https://github.com/microsoft/vscode-pull-request-github/issues/1778
    - -> il doit être possible de générer un token pour codium ici: https://github.com/settings/tokens

- push the initialized project
    - update .gitignore to ignore codium workspaces and emacs temp files: `printf "*~\n.\#*\#\n*.code-workspace" >> .gitignore`
    - check untracked dirs and files: `git status`
    - add all untracked dirs/files to the first commit: `git add .`
        - to untrack the file without deleting it from disk: `git rm --cached <filename>`
    - first commit: `git commit -m "first commit: init VueJs project"`
    - create a repo on github then add the remote repo: `git remote add origin https://github.com/BaptisteBenti/vuejs-eshop.git`
    - rename master branch: `git branch -m main` (this can't be done before the first commit)
    - push: `git push -u origin main`

## install project dependencies

### install Vue DevTools

- install Vue DevTools (beta: 6.0.0) extension for Firefox by downloading xpi file from repo: https://github.com/vuejs/vue-devtools/releases/
    - -> we must use beta version with VueJs 3x or it doesn't work
    - -> doc: https://devtools.vuejs.org/guide/installation.html#beta
- check if it works by starting the project in firefox and opening the dev console (f12) ; the Vue tab must appears! Restart the browser if necessary

### install Vue Router

- install Vue Router: `npx vue add router`
    - -> using the above command adds the router to the existing project
    - -> using `npm i vue-router` does not adapt to the project
- doc: https://router.vuejs.org/installation.html

### install Vuex

- not now!
- doc: https://vuex.vuejs.org/

## development



- Awesome-vue: https://github.com/vuejs/awesome-vue