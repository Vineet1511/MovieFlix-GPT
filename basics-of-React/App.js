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


const parent = React.createElement(
    "div", 
    {id : "parent"},
    React.createElement(
    "div", 
    {id : "child"}, 
    [React.createElement("h1", {}, "I am a H1 Tag..."),
    React.createElement("h2", {}, "I am a H2 Tag...")
    ]
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)


    