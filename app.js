
const parent=React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
       [React.createElement(
            "h1",
            {},"hii i am h1 tag"),
            React.createElement("h2",
            {},"fhgjg")]
       ),
       React.createElement(
        "div",
        {id:"child2"},
       [React.createElement(
            "h1",
            {},"hii i am h1 tag"),
            React.createElement("h2",
            {},"fhgjg")]),
    );




const heading = React.createElement("h1",{id:"heading"},"hiii");
 const root=ReactDOM.createRoot(document.getElementById("root"));
 root.render(parent);