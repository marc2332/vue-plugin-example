# vue-plugin-example

The purpose of this plugin is to show how to port/use vue apps on Graviton.

## Installing

- Option 1: With [graviton-cli](https://github.com/Graviton-Code-Editor/graviton-cli) , by typing: graviton -i marc2332/vue-plugin-example
- Option 2: Cloning and installing dependencies manually


## Developing

The directory **/source** contains all the source from the Vue app it self.

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
This will create a directory **/dist** in the plugin folder, you may have to update the CSS files on the plugin package.json's CSS array. This is not necessary with JavaScript files.
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).