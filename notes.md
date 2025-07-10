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