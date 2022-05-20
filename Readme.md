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
15. Next.JS CSS Global (External CSS)
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

- As mentioned in the tutorial on static routing, Next.js defines routes based on the concept of pages.

- What does that mean? Every Next.js project comes with a pages folder. The structure of the pages folder determines the structure of your routes and every file inside that folder maps to a route in your application.

- Essentially, every time you want to create a route, you need to add a file in the pages folder. Keep in mind that the pages folder itself represents your root url (meaning /).

- For static routing, you can create a new route by adding a index.js or a named file like about.js.

```sh
pages/index.js maps to /

pages/about.js maps to /about
```

- But how does it work for dynamic routes? Say I wanted to create a blog, how would I add a route such as myblog.com/posts/:id?

- Next.js handles dynamic routes by supporting brackets around parameters (e.g [id]) as a filename. Going back to my blog example, I would therefore create a [id].js file inside my posts folder.

- As a result, /pages/posts/[id].js would map to /posts/[id] where id is the unique id of your post.

```sh

pages/
│   index.js -> url: /
│
└───posts/
     |  index.js  -> url: /posts
     |
     └─── [id]/
             index.js       -> url: /posts/[id]
             commentId.js   -> url: /posts/[id]/[commentId]

```

# 9. Link Component|Create Navbar without Page Refresh

- if we have to link component in next js we have to use next component which is provided by the nextjs. To use this component import this

```sh

import Link from 'next/link'

```

- we can use this as simple as we are using anchor tag in html

```sh
<Link href="your url">
<a>Your Data Or Message Here</a>
</Link>
```

# 10. Creating Our Own Next.JS 404 Error Page

- Next.js by default provides 404 error page but if we have to change it then we have to create a file name 404.js in that specific code we have to mention the 404 page code. the file name must be 404.js if we are using another name then it might not be working.

- So, design a 404 Page in HTML & CSS then put it into 404.js and that specific page will be display when we are calling any other url that are not present in application.

# 11. Next.JS Challenge No 1: Link Error Page With Home Page

- Here, we are simply using Link Component at error page if we click on that page it redirect us to home page

# 12. Next.JS Challenge No 2: Redirect to Home Page on Click|Events In Next.JS
```javascript
import Link from "next/link";
import {useRouter} from 'next/router';
const Error = () => {
  let router = useRouter();
  let handleClick = ()=>{
    router.push('/')
  }
  return (
    <>
      <div className="number">404</div>
      <div className="text">
        <span>Ooops...</span>
        <br />
        page not found
      </div>
      <div style={{ marginTop: "50px" }}>
        
          <a
          onClick={()=>{
            router.push('/')
          }}
            className="text"
            style={{
              border: "2px solid #000",
              padding: "10px",
              color: "inherit",
              textTransform: "none",
              textDecoration: "none",
              cursor:'pointer'
            }}
          >
            Home(OnClick)
          </a>
        <a
          onClick={handleClick}
            className="text"
            style={{
              border: "2px solid #000",
              padding: "10px",
              marginLeft:'12px',
              color: "inherit",
              textTransform: "none",
              textDecoration: "none",
              cursor:'pointer'
            }}
          >
            Home(using Function)
          </a>
      </div>
    </>
  );
};

export default Error;

```
# 13. Next.JS Challenge No 3: Redirect 404 Page after 5 Sec|Hooks In Next.JS
```javascript

// import "../styles/Error.module.css";
import Link from "next/link";
import {useRouter} from 'next/router';
import { useEffect } from "react";
const Error = () => {
  let router = useRouter();
  let handleClick = ()=>{
    router.push('/')
  }
  useEffect(() => {
    return () => {
      setTimeout(()=>{
        handleClick()
      },2000)
    }
  }, [])
  
  return (
    <>
      <div className="number">404</div>
      <div className="text">
        <span>Ooops...</span>
        <br />
        page not found
      </div>
      <div style={{ marginTop: "50px" }}>
        
      </div>
    </>
  );
};

export default Error;
```
# 14. Understanding Next.JS Components

- Similarly as react we have to create component where we can put all over component.
 
# 15. Next.JS CSS Global (External CSS)

- use styles/globals.css for using Global CSS

# 16. Next.JS CSS Module (Component-Level CSS)

- Use styles/Home.module.css for using component/moduele level CSS

# 17. Next.JS CSS-in-JS(Inline Styling)

- If we want to use inline css in our component use ``` style={{here will be your css code}}```. This is as similar like react

# 18. What is Styled-JSX in Next.JS
- If we want to use Styled-JSX in Next.JS just simply create like this 

```javascript
<style jsx>
{
`
    h1{
        color:red;
    }
`
}
</style>
```


# 19. Next.JS Image Component & Optimization

- if we want to use image in Next.JS we need to Do Some Changes in next.config.js and the file in which we are using images

```Next.config.js```

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['images.unsplash.com']
  }
}

module.exports = nextConfig
```

- Add Domain Field in which the image will be comes from if we want to use external link other wise no need to do changes in next.config.js.

```anyfile.html```

```javascript
import Image from 'next/image'
export default function AnyFile(){
    <Image src="https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWJvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500"  width={500} height={500} > 
   </Image>
} 
```
- Here, we must give image height width or layout otherwise it throw error.

# 20. Next.JS Head Component & SEO

- We expose a built-in component for appending elements to the head of the page:

```javascript
import Head from 'next/head'
function IndexPage() {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p>Hello world!</p>
    </div>
  )
}
export default IndexPage
```

- The contents of head get cleared upon unmounting the component, so make sure each page completely defines what it needs in head, without making assumptions about what other pages added.

- title, meta or any other elements (e.g. script) need to be contained as direct children of the Head element, or wrapped into maximum one level of <React.Fragment> or arrays—otherwise the tags won't be correctly picked up on client-side navigations.

- We recommend using next/script in your component instead of manually creating a <script> in next/head.

- The Next.js Script component, next/script, is an extension of the HTML <script> element. It enables developers to set the loading priority of third-party scripts anywhere in their application, outside next/head, saving developer time while improving loading performance.

```javascript
import Script from 'next/script'
export default function Home() {
  return (
    <>
      <Script src="https://www.google-analytics.com/analytics.js" />
    </>
  )
}
```


# 21. Rest API|Next.JS GetStaticProps() for Data Fetching



# 22. Next.JS Challenge No 4: How to show only5Results while Fetching Data from API

# 23. Next.JS GetStaticPaths() for Rest API & Dynamic Route

# 24. Deploy Next.JS App to Vercel
