# vuejs-eshop

<!-- TOC -->

- [vuejs-eshop](#vuejs-eshop)
    - [devlog](#devlog)
        - [init VueJs project](#init-vuejs-project)
        - [install Vue DevTools](#install-vue-devtools)
    - [roadmap](#roadmap)
    - [resources](#resources)
    - [Project setup](#project-setup)
        - [Compiles and hot-reloads for development](#compiles-and-hot-reloads-for-development)
        - [Compiles and minifies for production](#compiles-and-minifies-for-production)
        - [Lints and fixes files](#lints-and-fixes-files)
        - [Customize configuration](#customize-configuration)

<!-- /TOC -->

## devlog

### init VueJs project

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
    - rename master branch: `git branch -m main`
### install Vue DevTools

## roadmap

- push on github

## resources

- https://awesomeopensource.com/project/ikismail/Vue-ShoppingCart

------------------------------------------------------------------------------------------------

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
