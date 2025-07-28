# Episode 2:

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
-> npx parcel index.html --> Generates the development bundle which is stored in /dist folder and hosts them onto localhost:1234
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

--> npm install react (not using the npm flag -D here, because this is not a dev dependency)
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
-> JSX is not HTML in JS, it's like HTML and XML like syntax
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

# Episode:4 -> Talk is cheap, show me the code:

-> Passing props to functional component is like passing arguments to a function.

-> config driven UI
-> whenever you are looping using map, give a key.
-> not using keys (not acceptable) <<<<<< index as key(use as last resort) <<<<<<<<<<<< unique id (best practice)

# Episode:5-> Let's Get Hooked.

->Best practice is to have each component in a different file with the component as filename.

->Before importing the component to App.js, the component should be exported.
-> By default we can only export one thing from one file, to export multiple things from one file, we have to use named export.
-> for importing a default export we dont need {}, but for importing a named export we need {}

- named export : export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

- importing a named export : import {LOGO_URL} from "../utils/constants";

-> so,There are two types of export and import. - Default Export/Import
export default Component;
import Component from "path" - Named Export/Import
export const Component;
import { Component } from "path"

# React Hooks

(Normal JS utility functions written by facebook developers.)

- useState() -> used to create Superpowerful state variable in react.
- useEffect()

Creating a normal JS Variable

- const listOfResturants = [];
  Creating a state variable
- const [listOfRestaurants,setListOfRestaurants] = useState([]);
  - we will be looping over the listOfResturants and update/modify we have to update to setListofRestaurants.
  - As soon as the state variabe is update (i.e by setting new values to setListofRestaurants), react re-renders the component.

# React is good at DOM manipulations

-> React uses Reconciliation Algorithm(Also called as React Fiber)
-> Virtual DOM is a representation of the actual DOM.
-> React uses DIFF algorithm to find the difference between old virtual dom and the new virtual dom

# React Fiber:

React Fiber Explanation
What is React Fiber?

- Acomplete rewrite of React's core algorithm
- Introduced in React 16
- Internal implementation of React's reconciliation algorithm
  Key Features
- Incremental Rendering
- Splits rendering work into chunks
- Can pause, resume, and prioritize rendering tasks
  Priority Levels
- Different types of updates get different priority:
- High: User interactions (clicks, input)
- Low: Data updates, network responses
  Main Concepts
- Reconciliation: Process of updating the DOM
- Work Units: Smallest units of work
- Virtual DOM: Tree of React elements
- Fiber Tree: Internal representation of component tree
  Benefits
- Better Performance
- Smoother animations
- Responsive user input
- Efficient background updates
  Concurrent Features
- Suspense
- Concurrent Mode
- Time Slicing

# Chapter-06: Exploring the world.

Better API approach for React:
page loads -> Render -> API call -> Render

-> useEffect Hook:
useEffect(CallbackFunction, Dependency Array);
-> useEffect's-> callBackFunction will be called after the component renders

    useEffect(() => {
      fetchData();
     },[] );

-> fetch() is a super function given by the browsers.
fetch() method returns a promise
-> Two ways to resolve a promise
-> using .then and .catch (traditional way)
-> Async await (Newer and better approach.)

# CORS -> Cross Origin Request Sharing

Browsers don't allow websites on one url to request data from different url.(Read more about it.)

# Latest UI Standard.

-> Shimmer UI -> components loads -> Render Shimmer UI (skeleton) -> API -> Render with API data.

# Conditional Rendering.

-> Rendering based on a conditon is called condtional rendering.

    if(listOfRestaurants.length === 0) {
    return (
      <div className="loading">
        <Shimmer />
      </div>
    );

}

# useState rendering

export const Header = () => {
const [btnNameReact, setBtnNameReact] = useState("Login");  
 <button className="login"
onClick={() =>{
setBtnNameReact("Logout");
console.log("Login button clicked :: " + btnNameReact);
}} >{btnNameReact}</button>

    }
    Question: How are we allowed to change the value of btnNameReact, even though it is a const variable.
    ANS: when setBtnNameReact("Logout") is called, react keeps track on this value and re-renders the Header component(by just calling the header component).when the component is rendering, it creates a new instance of btnNameReact with the updated value.

# So whenever state variable updated, react triggers a reconciliation cycle(Re Renders the component)

# Episode 07 : Finding the path.

# useEffect hook:

-> useEffect without dependency array, will be called everytime the component is rendered.
-> useEffect with empty dependency array, will be called only on initial render (just once).
-> useEffect with dependency arrray [btnNameReact], will be called after the initial render and when [btnNameReact] is updated.

# useState hook:

Best Practices:
-> Never create useState hook outside the functional component.
-> write your state variable at the top of the component.
-> Don't create state variable inside of IF conditon.
-> Don;t create state variable inside loops.
-> Don't create state variable inside functions. Just create them at top level of your component, make sure they are the first lines in your component.

# Routing

# React Router

    Install command: npm install react-router-dom

To use routing, we need to create routing configuration.
-> Import createBrowserRouter from "react-router-dom"
-> using createBrowserRouter create the routing configuration.
const appRouter = createBrowserRouter([
{
path: "/",
element: <AppLayout />
},
{
path: "/about",
element: <About />
}
])

-> To provide the routing configuration to the app, we need another compoment. - import { RouterProvider } from "react-router-dom". - Then render the RouterProvider instead of the mainComponent.
root.render(<RouterProvider router={appRouter}/>)

To learn more abour React Router and check for options other that createBrowserRouter visit: https://reactrouter.com/home

#### rafc is a shortcut to create boiler code of the functional component.

# useRouteError hook by "react-router-dom"

note: hook name starts with use, it is the naming convention react follows
-> to use it, import in your error page component.
const err = useRouteError();
the returned err object will have the additional information about the error.

     const appRouter = createBrowserRouter([
     {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />
    },
     ])

      # Child Routes

      const appRouter = createBrowserRouter([
      {
        path: "/",
        element: <AppLayout />,
        children: [
          {
            path: "/",
            element: <Body />,
          },
          {
            path: "/about",
            element: <About />,
          },
          {
            path: "/contact",
            element: <Contact />,
          },
          ],
          errorElement: <Error />,
          },
      ]);

-> To use the child routes, we can use the Outlet component from react-router-dom.

const AppLayout = () => {
return (

<div className="app">
  <Header />
  <Outlet />
</div>
);
};
-> Now based on the child path, <Outlet /> will be replaced by the child element.

# Link component, from React-Router-DOM

-> Don't use anchor tag <a href= "/about"> About us</a>, since it loads the entire page, including the header component.

  <Link to="/contact">Contact Us</Link>

-> Link is a wrapper on <a> tag, the link component internally uses <a>.

# React apps are Single page applications, because we are just interchanging the compoents instead of load a new page.

# Types of Routing in Web Apps.

- Client Side Routing
  React uses Client side routing, because we won't be making network call to switch between pages. Since all components are loaded at the start, going to a different page is nothing but switching to that component.
- Server side Routing
  Earlier days when using <a> tags, when we switch to a page, we are making a network call to get that page's information from server and load/render on the page.
