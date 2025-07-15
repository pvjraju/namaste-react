Episode 2:

-> Bundler does the following:
        --minify the code
        --cache the code
        --compress the code
        --clean the code
        --bundle the code.
    -> it basically bundle or package the code before we ship it to production.
    examples : webpack, parcel etc.

To initialize npm -> npm init
to install parcel -> npm install parcel
                     npm install -D parcel
                        -> two types of depenedencies we can install
                             -> Dev dependencies(used during the development)
                             -> normal dependencies (used in production)


~: Allows updates to the patch version only (e.g., ~2.15.4 allows 2.15.x but not 2.16.0).
^: Allows updates to the minor and patch versions, but not the major version (e.g., ^2.15.4 allows 2.x.x but not 3.0.0).


->Transitive dependency: When installing parcel, it bring lot more other packages with it to node_modules, because as we are dependent on parcel, parcel is dependent on other packages.

-> If we have package.json and package-lock.json, we can install node_modules

To install node_modules from package.json and package-lock.json -> npm install


parcel commands:
   -> npx parcel index.html   --> Generates the development bundle which is stored in /dist folder and hosts them onto localhost:1234 
   --> npx command is used to execute the package
   --> npx parcel build index.html -> generates the production bundle and stores it in /dist folder.

Parcel does the following:
  -->Parcel also does HMR -> Hot Module Replacement, after running the application, if we do changes in any file, the changes will be reflected automatically.
  -->parcel does this using a File watching algorithm, which is written in C++
  -->parcel is also does caching, so the builds can be faster. the cache files are stored in our project directly itself under /.parcel-cache directly.
  --> Does image optimization as well.
  --> Does minification and Bundling
  --> Compress the files
  -->Consistent Hashing
  -->Code splitting
  -->Differential bundling (To support older browsers)
  -->Diagnostic
  -->Formats the error messages and give suggestions
  --> HTTPS
  --> Tree Shaking (removes unused code)
  --> Different dev and prod bundles

check our parcel's documentation at parceljs.org



--> Adding CDN links of react and react-dom directly is not the preferred way to add react and react-dom libraries. Instead install react as a package from npm

   --> npm install react   (not using the npm flag -D here, because this is not a dev dependency)
   --> npm i react-dom (i is shortform for install)


to import react to the app
 instead of this browser script <script src = "./App.js"> this will throw error 
       @parcel/transformer-js: Browser scripts cannot have imports or exports.
 
 we have to add like <script type = "module" src = "./App.js">


-->Browserslist:
     we can add the following configuration in package.json

       "browserslist":[
       "last 3 versions"
      ]

      it makes sure that the application will run in the last 3 versions of all the browser and it may or may not work in the other older version.

      to know more about the coverage and query composition for browserslist visit : https://browserslist.dev/



---All the above things are done automatically by create react-app command, but these are the different packages that are used internally, which makes the react app faster by doing bundling and caching and etc.



Episode-3:Laying the foundation

--> Adding custom scripts in package.json to have shortforms of the commands.
       "scripts": {
        "start": "parcel index.html --open",
        "build": "parcel build index.html",
        "test": "jest"
    },
    Next time to start the application we can run npm run start or npm start instead of npx parcel index.html(note: npm without run can only be used for start)

React element => Object =>(when we render to DOM it becomes) HTML Element

Code snippet:
   const heading = React.createElement("h1", {id: "heading"}, "Hello World from React");
   const root = ReactDOM.createRoot(document.getElementById("root"));
   root.render(heading);

render method will convert the heading object to HTML element and replace the root div content with it.

JSX:(read more about it)
  -> JSX  is not HTML in JS, it's like HTML and XML like syntax
  -> JSX element => React Element => Object => HTML Element
 const jsxHeading = <h1 id="Heading">Namste React using JSX</h1>

 ->JSX code is transpiled before it reaches the JS Engine, This is orchestrated by Parcel -> Uses Babel to convert the JSX code to what React understands(React.createElement in this example)

 -> The attributes of JSX uses camelCase.
    const jsxHeading = <h1 className="Heading" tabIndex="5">Namste React using JSX</h1>  
    //note:In HTML the attribute name in class, this is one such difference between JSX and HTML


 -> Code which JS Engine can understand is EcmaScript(Javascript, JScript etc)



React Components:
  -> Class Based component -> Old way of doing
  -> Functional component -> New way of doing

React functional component: is just a function, which return JSX content

const HeadingComponent = () => {
   return <h1>I am an Functional Component</h1>
}

-> Component variable name should always start with capital letter.

//This is how we render a component.
root.render(<HeadingComponent />)

-> You can use one component within another component. (This is called Component composition.)
JSX content in the end, is an React element (transpiled by Babel)

->we can write any JavaScript inside these brackets within the JSX.
-> So any function that returns a React element/JSX content is a functional component.
const HeadingComponent = () => ( 
<div id="container">
  {
    //we can write any JavaScript inside these brackets within the JSX.
    <h1>{number * 4}</h1>
  } 
  {jsxHeading}
 <Title />   
<h1 className="HeadingComponent">
    I am an Functional Component
</h1> 
</div>
);

-> So we can use react element inside the functional component and vice versa.
-> JSX also protects from cross site scripting attack. By sanitizing the ReactElement content.
-> React code is readable because of JSX
-> We can use Java script within the JSX, because of Babel
