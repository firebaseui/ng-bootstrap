<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/firebaseui/ng-bootstrap/master/demo/src/assets/logo.svg">
</p>

# @firebaseui/ng-bootstrap - Angular Bootstrap UI library for firebase authentication powered by @ng-bootstrap

[![npm version](https://badge.fury.io/js/%40firebaseui%2Fng-bootstrap.svg)](https://badge.fury.io/js/%40firebaseui%2Fng-bootstrap)
[![npm demo](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://firebaseui.github.io/ng-bootstrap)
[![Join the chat at https://gitter.im/firebaseui/Lobby](https://badges.gitter.im/firebaseui/Lobby.svg)](https://gitter.im/firebaseui/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![CircleCI branch](https://img.shields.io/circleci/project/github/firebaseui/ng-bootstrap/master.svg?label=circleci)](https://circleci.com/gh/firebaseui/ng-bootstrap)
[![Coverage Status](https://coveralls.io/repos/github/firebaseui/ng-bootstrap/badge.svg?branch=master)](https://coveralls.io/github/firebaseui/ng-bootstrap?branch=master)
[![dependency Status](https://david-dm.org/firebaseui/ng-bootstrap/status.svg)](https://david-dm.org/firebaseui/ng-bootstrap)
[![devDependency Status](https://david-dm.org/firebaseui/ng-bootstrap/dev-status.svg?branch=master)](https://david-dm.org/firebaseui/ng-bootstrap#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/firebaseui/ng-bootstrap.svg)](https://greenkeeper.io/)
[![license](https://img.shields.io/github/license/firebaseui/ng-bootstrap.svg?style=flat-square)](https://github.com/firebaseui/ng-bootstrap/blob/master/LICENSE)

## Demo

View all the directives in action at https://AnthonyNahas.github.io/@firebaseui/ng-bootstrap

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

## Installation
Install above dependencies via *npm*. 

Now install `@firebaseui/ng-bootstrap` via:
```shell
npm install --save @firebaseui/ng-bootstrap
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `@firebaseui/ng-bootstrap`:
```js
map: {
  '@firebaseui/ng-bootstrap': 'node_modules/@firebaseui/ng-bootstrap/bundles/@firebaseui/ng-bootstrap.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { LibModule } from '@firebaseui/ng-bootstrap';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` LibModule .forRoot()`):
```js
import { LibModule } from '@firebaseui/ng-bootstrap';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [LibModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` LibModule `:

```js
import { LibModule } from '@firebaseui/ng-bootstrap';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [LibModule, ...], 
})
export class OtherModule {
}
```

## Usage



## License

Copyright (c) 2018 Anthony Nahas. Licensed under the MIT License (MIT)

