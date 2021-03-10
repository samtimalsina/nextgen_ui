# Introduction

Nextgen UI is an alternative JavaScript based UI interface for Drupal administration screens.

This library uses [Carbon Components](https://www.carbondesignsystem.com/)

## Philosophy

- Smaller individual applications are better than a monolithic JavaScript application. For this, we use Rollup.js to package each "app" into [JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).
- It should be easy for Drupal modules to add or modify another application.

## Architecture

We are using babel to transpile .ts files to .js. TypeScript is used only to generate `d.ts` files. 

## FAQs

**Q. Why not a standalone JavaScript application?**

The ultimate goal is to integrate the best parts of Drupal with modern JavaScript. There are also some benefits of not doing a standalone application. See below.

**Q. Why not React?**

React does not export React and ReactDOM as ES modules yet. When they do, React could be adopted fairly easily in this architecture. For now, we are using vanilla JavaScript.

**Q. What are the benefits of this approach?**

- Does not require a separate server to host and serve the application. Application is served by Drupal itself.
- Adding new functionality should be as easy as writing or installing a new Drupal module.

**Q. What are the downsides of this approach?**

- Opinionated. This approach is highly influenced by the desire to make immediate improvements to Drupal admin UI, and not waiting for the rest of the ecosystem to catch up. 
- The JavaScript code is still tightly coupled with Drupal's filesystem. New functionality are written inside Drupal modules.
- Some features may not work in older browsers. It is a necessary 

## To install

Install as a regular drupal module. All JavaScript assets are already compiled. 


## To develop

The JavaScript assets need to be compiled, so you need to install yarn on your local.
