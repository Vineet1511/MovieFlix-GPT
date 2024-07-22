// const heading = React.createElement(
//     "h1", 
//     {id : "heading", xyz : "abc"}, 
//     "Hello World from React");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);



//***************************Nested HTML Structure***************************************** */



// const parent = React.createElement(
//     "div", 
//     {id : "parent"},
//     React.createElement(
//     "div", 
//     {id : "child"}, 
//     React.createElement("h1", {}, "I am a H1 Tag..")
//     )
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent)


//**************************MULTIPLE CHILD SIBLINGS****************************************** */


// const parent = React.createElement(
//     "div", 
//     {id : "parent"},
//     React.createElement(
//     "div", 
//     {id : "child"}, 
//     [React.createElement("h1", {}, "I am a H1 Tag..."),
//     React.createElement("h2", {}, "I am a H2 Tag...")
//     ]
//     )
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent)


//**************************USING module react import****************************************** */

// import React from "react";
// import ReactDOM from "react-dom";

// const parent = React.createElement(
//     "div", 
//     {id : "parent"},
//     React.createElement(
//     "div", 
//     {id : "child"}, 
//     [React.createElement("h1", {}, "I am a H1 Tag..."),
//     React.createElement("h2", {}, "I am a H2 Tag...")
//     ]
//     )
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);


//**************************REACT FOUNDATION****************************************** */

//JSX - HTML or XML like syntax

// import React from "react";
// import ReactDOM from "react-dom";

// const jsxHeading = <h1 id="heading">Namaste React using JSX 🚀</h1>

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);


//**************************REACT FUNCTIONAL COMPONENT****************************************** */


// import React from "react";
// import ReactDOM from "react-dom";

// const HeadingComponent = () => {
//     return <h1>Namaste React Functional Component 🚀</h1>
// } 


// const HeadingComponent2 = () => <h1 id="heading">Namaste React Functional Component 🚀</h1>

// const HeadingComponent3 = () => (
//     <div id="container">
//         <h1 id="heading">Namaste React Functional Component 🚀</h1>
//     </div>
// )

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent3 />);


//**************************REACT COMPONENT COMPOSITION****************************************** */

// import React from "react";
// import ReactDOM from "react-dom";

// const Title = () => (
//     <h1 className="head" tabIndex = "117">Namaste React from JSX 🚀</h1>
// )

// const HeadingComponent = () => (
//     <div id="container">
//         <Title />
//         <h1 id="heading" className="heading">Namaste React from Functional Component 🎉</h1>
//     </div>
// )

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent />)


//**************************USE JS INSIDE REACT COMPONENT****************************************** */


// import React from "react";
// import ReactDOM from "react-dom";

// const title = (
//     <h1 className="head" tabIndex = "117">Namaste React from JSX 🚀</h1>
// )

// const num1 = 1500;
// const num2 = 1668;

// const HeadingComponent = () => (
//     <div id="container">
//         {title}
//         <h2>{num1 + num2}</h2>
//         <h1 id="heading" className="heading">Namaste React from Functional Component 🎉</h1>
//     </div>
// )

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent />)


//**************************JSX ELEMENT INSIDE ANOTHER JSX ELEMENT ****************************************** */

import React from "react";
import ReactDOM from "react-dom";

const elem = <span>This is JSX React Element...🐱‍🏍<br /></span>

const title = (
    <h1 className="title">
        {elem} <br />
        Namaste React using JSX Element...🚀
    </h1>  
);

const HeadingComponent = () => (
    <div id="container">
        {title}
        <h1 className="heading">Namaste React using Component...🎉</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);




    