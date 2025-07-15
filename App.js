import React from "react";
import ReactDOM from "react-dom/client";


//React element => Object =>(when we render to DOM it becomes) HTML Element

const heading = React.createElement("h1", 
    {id: "heading"}, 
    "Hello World from React");

 console.log(heading);
 // JSX  is not HTML in JS, it's like HTML and XML like syntax
 //JSX element => React Element => Object => HTML Element
 const jsxHeading = <h1 className="Heading" tabIndex="5">
    Namste React using JSX
    Hello, do you fail or not.
    </h1> 
 console.log(jsxHeading);

// React functional component: is just a JS function, which return JSX content
const Title = function () {
    return(
    <h1 className="Title" tabIndex="5" >
        I am Title Component
    </h1>
  );
}

const number = 10000;

//Instead of using the function syntax we can just use arrow functions as industry standard. (lambda's in java 😂)
const HeadingComponent = () => ( 
<div id="container">
  {
    //we can write any JavaScript inside these brackets within the JSX.
    <h1>{number * 4}</h1>
  } 
  {jsxHeading}
 <Title />   
 <Title></Title>
 {
 //Since Title functional component is nothing but a Javascript fucntion, we can simply use a funtional call   
 Title()
 }
<h1 className="HeadingComponent">
    I am an Functional Component
</h1> 
</div>
);
  

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(jsxHeading);

//This is how we render a component.
//Based on the <>, babel understands that this is a component and transpiles the code accordingly, 
// root.render then converts the babel's output to HTML element and pass it to the browser.
root.render(<HeadingComponent />)