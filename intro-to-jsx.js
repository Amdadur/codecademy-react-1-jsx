//JSX looks like html - will be compiled as javascript
const h1 = <h1>Hello world</h1>;

//JSX element can be saved in a variable, passed to a function, stored in an object or array
const navBar = <nav>I am a nav bar</nav>;

//JSX object
const myTeam = {
    center: <li>Benzo Walli</li>,
    powerForward: <li>Rasha Loa</li>,
    smallForward: <li>Tayshaun Dasmoto</li>,
    shootingGuard: <li>Colmar Cumberbatch</li>,
    pointGuard: <li>Femi Billon</li>,
};

//JSX attribute written as: a name, followed by an equals sign, followed by a value. Same as HTML
const p1 = <p id="large">foo</p>;
const p2 = <p id="small">bar</p>;

//Nest JSX elements inside of other JSX elements just like HTML (but must use parentheses)
const myDiv = (
    <div>
        <h1>Hello world.</h1>
    </div>
);

//Must have exactly one outermost element (<div></div>)

//How to render:
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<h1>Hello world</h1>, document.getElementById("app"));

//ReactDom is a JS library.
//ReactDom.render() is a method.
//First argument can be a variable or JSX expression
//Second argument should be DOM expression
ReactDOM.render(<h1>Render me!</h1>, document.getElementById("app"));

//The first argument could also be a variable holding JSX
const myList = (
    <ul>
        <li>I</li>
        <li>Have</li>
        <li>No</li>
        <li>Idea</li>
    </ul>
);

ReactDOM.render(myList, document.getElementById("app"));

//Virtual DOM only updates DOM elements that have changed
//Rendering twice will do nothing
