# Task Manager application

## Upgrade to Angular 10

- Before updating it's better to check all breaking changes, because it's can brake your application. In this case 8 -> 10, everything will work fine
- In order for update Angular project from 8 to 10, we must do it step by step, version by version
- Commit or stash any changes before updating
- Raise the version of the program in my case to 20.11.0
- First update Angular to latest 8 version via next command: `npx @angular/cli@8 update @angular/cli@8 @angular/core@8`
- Then update Angular to v9: `npx @angular/cli@9 update @angular/cli@9 @angular/core@9`
- After we get next: "Need to install the following packages: @angular/cli@9.1.13. Ok to proceed? (y)", type y and press enter
- Successful update to Angular 9.1
- Commit or stash any changes before updating
- As we use Angular material and cdk, update them: `npx @angular/cli@9 update @angular/material@9`
- Also, it's good practice update other packages, e.g. for testing. Update packages for testing
- Then switch back on node v12.18.3(in my case) and run project. Project work well
- Now we can update angular to v10: `npx @angular/cli@10 update @angular/core@10 @angular/cli@10`
- I've got next: Node.js version v12.18.3 detected.The Angular CLI requires a minimum Node.js version of v18.19
- Raise the version of the program in my case to 20.11.0
- Run the same command: `npx @angular/cli@10 update @angular/core@10 @angular/cli@10`
- Next we get again: "Need to install the following packages: @angular/cli@10.2.1. Ok to proceed? (y)", type y and press enter
- After successful update commit all changes and run `npx @angular/cli@10 update @angular/material@10`
- Version of packages will update but not installed, because we have a lot of dependencies with different versions
- So run `npm install --legacy-peer-deps` to solve temporary this issue and check if everything work fine
- In the end, remove node_modules and package-lock.json and run `npm install`
- Then switch back on node v12.18.3(in my case) and run project. Project work well

## UI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.14.

## Architecture of the application

Application was divided into modules base on functionality that improves reusability and maintainability. Each module have a clear and specific purpose.
Components that will be used several times are better placed in share folder. Each component, service, or directive has a single responsibility.
To optimize change detection, the OnPush change detection strategy was used, especially in presentational components (in general they have @Input() decorators).
Every .ts files like helpers, models and so on, must have index.ts file for better import:
import {Model-1, Model-2} from '../../models' instead of import {Model-1} from '../../models/model-1' and {Model-2} from '../../models/model-2'.
Every component.ts have next structure: @Input(), @Output(), observable$(must have $ sign), public property, private property, get getter(), constructor(), public method, private method();
component.html: directive, attributes, input, output.
component.scss: BEM methodology

## Set Up and Run Project

To begin with, you need to download the project from the GitHub using command in terminal git clone "project URL". Next, open the project using the IDE and run the command `npm install`,
but for this you need to have an earlier version of node, in my case node v12.18.3. (You can check Angular version compatibility)
In order to change the node version, I use an additional tool called [NVM](https://github.com/coreybutler/nvm-windows?tab=readme-ov-file#readme).
Finally, run the command `npm run start`.

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
