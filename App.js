// const heading = React.createElement(
//   "h1", 
// {id : "heading"}, 
// "Hello World from React !")  // "{}" --- used to give attribute
/*-------------------------creating an nested object in recat------------------*/

const parent = [React.createElement(
  "div",
  { id: " parent1" },
  React.createElement(
    "div",
    { id: "child1" },
   [React.createElement("h1",{},"this is an h1 tag"),
   React.createElement("p",{},"this ia a p tag") ]
  )
),
React.createElement(
  "div",
  { id: " parent2" },
  React.createElement(
    "div",
    { id: "child2" },
   [React.createElement("h1",{},"this is an h1 tag2"),
   React.createElement("p",{},"this ia a p tag2") ]
  )
)
]

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);