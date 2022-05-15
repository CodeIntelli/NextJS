# NEXT JS TUTORIAL

![NextJs Img](https://www.educative.io/v2api/editorpage/6452289848475648/image/5294398307303424)

## Topics That Are Covered In This Tutorial

```sh

1. Introduction to Next JS
2. Prerequisite to Learn Next JS
3. Install Next.JS & Run Hello World Program
4. Understanding Next.JS Folder Structure In Hindi
5. How Next.JS Code works under the hood In Hindi
6. Next.JS Understanding File Base Routing
7. Next.JS Nested File Based Routing
8. Next.JS Dynamic Routing
9. Link Component|Create Navbar without Page Refresh
10. Creating Our Own Next.JS 404 Error Page
11. Next.JS Challenge No 1: Link Error Page With Home Page
12. Next.JS Challenge No 2: Redirect to Home Page on Click|Events In Next.JS
13. Next.JS Challenge No 3: Redirect 404 Page after 5 Sec|Hooks In Next.JS
14. Understanding Next.JS Components
15. Next.JS CSS lobal (External CSS)
16. Next.JS CSS Module (Component-Level CSS)
17. Next.JS CSS-in-JS(Inline Styling)
18. What is Styled-JSX in Next.JS
19. Next.JS Image Component & Optimization
20. Next.JS Head Component & SEO
21. Rest API|Next.JS GetStaticProps() for Data Fetching
22. Next.JS Challenge No 4: How to show only5Results while Fetching Data from API
23. Next.JS GetStaticPaths() for Rest API & Dynamic Route
24. Deploy Next.JS App to Vercel

```

# 1. Introduction to Next JS

## What is NEXTJS?

- The React Framework for production
- It is a framework of react. Here we dont need to learn new type of technology its need basic understanding of react.
- As we all know react is a library of javascript. And framework means its one type of house in which we can get all the stuff in one place .
- In framework we can use 3rd party package. but it's indirectly tells that primary use our components that provided by framework.
- Production means :- In react if we want to create something for production it takes to much time. but now in nextjs it dosen't complecate.
- Next.js is a React Framework that enables you to build superfast and extremely user friendly static website as well as full fledge production ready web applications using react.
- In fact, thanks to automatic static optimization, "static" and "dynamic" become one now.
- This features allows Next.js to build hybrid application that contain both server renderer and statically generated pages.

## Why we choose Next.js?

- The big reason to choose Next.js is its SEO Efficiency.
- it is using Server Side Rendering(SSR) and at the same time it can be also a great Static Site Generator(SSG).
- Next.js website are superfast, easy to scan and provide a great user experiance and that's why google will favour them above others and rank them higher.
- FileBased Routing(Pages/index.js)
- Support for CSS Modules(CSS for each pages)
- Pre-rendering (Better SEO).
- Image Optimization('next/images')
- API Routes(Pages/Api/User.js)
- Typescript Support. Fast Refresh(Fast. Live Editing Experiance)
- Dev & Prod Build System.

## What can you build with NEXT.js

- MVP(Minimum Viable Product)
- Jamstack Website
- Web Portals
- Single Web Page, Static Website.
- eCommerce and Retails website.
- SaaS Products
- Complex and demanding web applications.

# 2. Prerequisite to Learn Next JS

- HTML, CSS, Javascript, ES6+ & ReactJS Basics.

# 3. Install Next.JS & Run Hello World Program

- if you want to build project in Next.js you need two things
  - [Text Editor(VSCode, Sublime, etc)](https://kinsta.com/blog/best-text-editors/)
  - [NodeJS](https://nodejs.org/en/)

> Note:- In NextJS Index file we must need one component and default export statement otherwise it throw error.

> If you are getting "Cannot find module 'next/babel'" then you have to modify .eslintrc/json

`.eslintrc.json`

```sh
{
  "extends": ["next/babel","next/core-web-vitals"]
}
```

# 4. Understanding Next.JS Folder Structure In Hindi

```sh
        Main Folder
        └───.next #It will create when you are run next Project firsttime & this dosn't play important role it's will be in .gitignore
        └───*node_modules # Node modules is a place for every thirdparty library(vendor libraries) which you download from internet with npm. The libraries which are downloaded into node_modules are supposed to be used in respective project.
        └───*Pages # You’ll need to have a “pages/” directory, which behaves as a sort of one-to-one static router for your site. Each page will match a .js(x) file.
            └───api # API routes provide a solution to build your API with Next. js. Any file inside the folder pages/api is mapped to /api/* and will be treated as an API endpoint instead of a page.
                └───hello.js # here you can define endpoint of the api
            │   *_app.js #js will be rendered on every page. this is a good way to do custom layouts without having to wrap each page component in your /pages directory
            └───*index.js # Entry Point of the web app
        └───*Public # Any file placed inside this directory will be transferred to the root of the build, this usually works for static files, such as images, text files, etc.
            │   favicon.ico # Static File will be put here
            └───vercel.svg # Static File will be put here
        └───*styles # Main CSS Styling File
            │   globals.css # Global CSS Which Reflect to whole WebPage
            └───Home.module.css # Custom CSS For Specific Modules or Component
        └───.eslintrc # ESLint is a static code analysis tool for identifying problematic patterns found in JavaScript code.
        └───.eslintrc.json
        └───next.config.js # For custom advanced configuration of Next.js, you can create a next.config.js or next.config.mjs file in the root of your project directory (next to package.json).
        └───package.json # The package. json file is the heart of any Node project. It records important metadata about a project which is required before publishing to NPM, and also defines functional attributes of a project that npm uses to install dependencies, run scripts, and identify the entry point to our package.
```

### Root directory files

At the root of the directory, there are a few configuration and setup files such as:

- .eslintignore and .eslintrc
- Dockerfile
- .env files
- babel.config.js
- jest.config.js
- next.config.js
- package.json
- README.md

# 5. How Next.JS Code works under the hood In Hindi

When We are start our project we are using

`npm run dev`

or

`yarn run dev`

```sh

index.js # main file to render component
    ^
    |
    |
_app.js # here they find Component and it render that component and it means that specific folder it finds index.js and render that component. for that reason component and export default play important role.
    ^
    |
    |
Package.json

so, first it gone in


```

# 6. Next.JS Understanding File Base Routing

- So how is the routing in next.js app

  - File-system based routing mechanism
  - when a file is added to the pages folder in a project, by default all the files becomes available as a route.

    - If we want to create routes just need to create files it automatically create routes of that file name route.

    - If we are creating folder based routes then we can also create it but in that folder we must have to create index file. and under that folder we can add multiple pages that we want to add after routes.

    ```sh

    Folder Structure            Routes
    home.js                     /home
    contact.js                  /contact
    blog/index.js               /blog
    blog/blog-details.js        /blog/blog-details
    blog/card/index.js          /blog/card
    blog/card/title.js          /blog/card/title
    ```

# 7. Next.JS Nested File Based Routing

- If we want to create routes just need to create files it automatically create routes of that file name route.

- If we are creating folder based routes then we can also create it but in that folder we must have to create index file. and under that folder we can add multiple pages that we want to add after routes.

```sh

    Folder Structure            Routes
    home.js                     /home
    contact.js                  /contact
    blog/index.js               /blog
    blog/blog-details.js        /blog/blog-details
    blog/card/index.js          /blog/card
    blog/card/title.js          /blog/card/title
```

# 8. Next.JS Dynamic Routing

# 9. Link Component|Create Navbar without Page Refresh

# 10. Creating Our Own Next.JS 404 Error Page

# 11. Next.JS Challenge No 1: Link Error Page With Home Page

# 12. Next.JS Challenge No 2: Redirect to Home Page on Click|Events In Next.JS

# 13. Next.JS Challenge No 3: Redirect 404 Page after 5 Sec|Hooks In Next.JS

# 14. Understanding Next.JS Components

# 15. Next.JS CSS lobal (External CSS)

# 16. Next.JS CSS Module (Component-Level CSS)

# 17. Next.JS CSS-in-JS(Inline Styling)

# 18. What is Styled-JSX in Next.JS

# 19. Next.JS Image Component & Optimization

# 20. Next.JS Head Component & SEO

# 21. Rest API|Next.JS GetStaticProps() for Data Fetching

# 22. Next.JS Challenge No 4: How to show only5Results while Fetching Data from API

# 23. Next.JS GetStaticPaths() for Rest API & Dynamic Route

# 24. Deploy Next.JS App to Vercel
