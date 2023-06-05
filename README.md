
# Angular Component Interaction
 Different examples which show simplified how parent and child components may communicate with eachother. This repo has been created for educational purposes/my personal learning path. This examples even contain tests for testing the component communication
 [Guide page from Angular from where examples where taken](https://angular.io/guide/component-interaction)

# Examples

## Parent to child via **@Input decorator**
### files
- hero.ts
- hero-parent.component.ts
- hero-child.component.ts

## Intercept input property changes with a setter --> parent to child
- name-parent.component.ts
- name-child.component.ts

## Intercept input property changes with ngOnChanges() hook --> parent to child
- version-parent.component.ts
- version-child.component.ts


## Parent listens for child event (via EventEmiiter and @Output) --> Child to parent
- votetaker.component.ts
- voter.component.ts

## Parent interacts with child using local variable or @ViewChild() --> Child to parent
- countdown-parent.component.ts
- countdown-timer.component.ts
**Consider when using @ViewChild() / ngAfterViewInit() the waiting of one tick/cyle to avoid unidirectional-data-flow-violation error !**

## Parent and children communicate using a service, bidirectional (parent <-> child)
- mission.service.ts
- missioncontrol.component.ts
- astronaut.component.ts
**Each Component subscibes to an observable and emits data to to another observable, this happens basically vice versa so that the compnents can communicate with eachother.**

## Angular Info
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.4.
### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

#### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.