# devlog

<!-- TOC -->

- [devlog](#devlog)
    - [init VueJs project](#init-vuejs-project)
    - [install Vue DevTools / Vue Router / Vuex](#install-vue-devtools--vue-router--vuex)
        - [Vue DevTools:](#vue-devtools)
        - [Vue Router](#vue-router)
        - [Vuex](#vuex)
    - [development](#development)
        - [create a catalog page](#create-a-catalog-page)

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
    - remove package-lock.json: `rm ./package-lock.json` (since we use yarn with vue-cli)
    - test project: `yarn serve`

- connect github with codium
    - the automatic connection on github does not work with codium (forbidden authentication or error 801)
    - it is necessary to use an ugly workaround:
        - disconnect from github first
        - open this link where `vscodium` has been replaced by `vscode` and click to 'continue': https://vscode-auth.github.com/authorize/?callbackUri=vscode://vscode.github-authentication/did-authenticate%253FwindowId%253D1&scope=repo%20workflow&state=4581d083-208b-4e54-bb1c-54036727b4ae&responseType=code&authServer=https://github.com
        - reconnect from github via the displayed form
        - the redirection fails but you should be able to copy the token
        - switch back to VS code.
        - click `Signing in to github.com...` in the status bar.
        - paste the token and hit enter.

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

## install Vue DevTools / Vue Router / Vuex

For each dependency, choose the version compatible with Vuejs v3.x :

### Vue DevTools:

- install Vue DevTools (beta: 6.0.0) extension for Firefox by downloading xpi file from repo: https://github.com/vuejs/vue-devtools/releases/
- check if it works by starting the project in firefox and opening the dev console (f12) ; the Vue tab must appears! Restart the browser if necessary
- -> doc: https://devtools.vuejs.org/guide/installation.html#beta

### Vue Router

- install Vue Router: `yarn add vue-router@4`
- add a router to the current project: `npx vue add router`
- -> doc: https://next.router.vuejs.org/installation.html

### Vuex

- install Vuex: `yarn add vuex@next`
- add a store to the current project: `npx vue add vuex`
- -> doc: https://next.vuex.vuejs.org/installation.html

## development

### create a catalog page

- basculer sur une nouvelle branche locale: `git checkout -b catalog`
- créer une nouvelle route en ajoutant l'objet suivant au tableau routes dans @/router/index.js:
    ```js
    {
        path: '/catalog',
        name: 'Catalog',
        component: () => import('@/views/Catalog.vue')
    },
    ```
- créer la vue Catalog.vue dans le répertoire @/views:
    ```js
    <template>
    <div class="catalog">
        <h1>This is a catalog page</h1>
    </div>
    </template>


    <script>
    export default {

    }
    </script>

    <style>

    </style>
    ```
- ajouter un lien vers la page depuis @/App.vue:
    ```js
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/catalog">Catalog</router-link> |
        <router-link to="/about">About</router-link>
    </div>
    ```

- Awesome-vue: https://github.com/vuejs/awesome-vue