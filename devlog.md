# devlog

<!-- TOC -->

- [devlog](#devlog)
    - [init VueJs project](#init-vuejs-project)
    - [install Vue DevTools](#install-vue-devtools)
    - [install Vue Router](#install-vue-router)
    - [install Vuex](#install-vuex)

<!-- /TOC -->

## init VueJs project

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
- update .gitignore:
    ```bash
        cat <<EOF >> .gitignore
        *~
        .\#*\#
        *.code-workspace
        EOF
    ```
- push initialized project
    - check untracked dirs and files: `git status`
    - add all untracked dirs/files to the first commit: `git add .`
        - to untrack the file without deleting it from disk: `git rm --cached <filename>`
    - first commit: `git commit -m "first commit: init VueJs project"`
    - add a remote repo: `git remote add origin https://github.com/BaptisteBenti/vuejs-eshop.git`
   - rename master branch: `git branch -m main` (this can't be done before the first commit)
   - push: `git push -u origin main`

## install Vue DevTools

## install Vue Router

## install Vuex

## dev

- resources: https://github.com/vuejs/awesome-vue