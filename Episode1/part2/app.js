
// we can give attributes in objects {}
const heading = React.createElement("h1", {id:"heading",className:"hello",vchh:"jdj"}, "Hello World From React"); // creating a react element


console.log(heading)

const root = ReactDOM.createRoot(document.getElementById("root")); // created a root element inside react, everything will render here

root.render(heading); // this render method is responsible for converting the heading object into element and put it to the dom
