# Task Manager application

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
