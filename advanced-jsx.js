//Use className instead of class
const myDiv = <div className="big">I AM A BIG DIV</div>;

ReactDOM.render(myDiv, document.getElementById("app"));

//Self-closing tags: you must close tags (eg. <br/> <img/> <input/>

//js in jsx in js {Curly braces covert to js}
ReactDOM.render(<h1>{2 + 3}</h1>, document.getElementById("app"));

const math = <h1>2 + 3 = {2 + 3}</h1>;

ReactDOM.render(math, document.getElementById("app"));

//Access variables while inside of a JSX expression, even if those variables were declared outside
const theBestString = "tralalalala i am da best";

ReactDOM.render(<h1>{theBestString}</h1>, document.getElementById("app"));

//Use variables to set attributes
const sideLength = "200px";

const panda = (
    <img
        src="images/panda.jpg"
        alt="panda"
        height={sideLength}
        width={sideLength}
    />
);

//Object properties can be used to set attributes
const pics = {
    panda: "http://bit.ly/1Tqltv5",
    owl: "http://bit.ly/1XGtkM3",
};

const panda = <img src={pics.panda} alt="Lazy Panda" />;

const owl = <img src={pics.owl} alt="Unimpressed Owl" />;

//Event listeners via attribute (onclick={}, onMouseOver={})
function makeDoggy(e) {
    //When called the <img> will become a picture of a dog
    e.target.setAttribute(
        "src",
        "https://content.codecademy.com/courses/React/react_photo-puppy.jpeg"
    );
    e.target.setAttribute("alt", "doggy");
}

const kitty = (
    <img
        src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg"
        alt="kitty"
        onClick={makeDoggy}
    />
);

ReactDOM.render(kitty, document.getElementById("app"));

//Conditionals (no if statements for JSX, must declare separately)
let message;

if (user.age >= drinkingAge) {
    message = <h1>Hey, check out this alcoholic beverage!</h1>;
} else {
    message = <h1>Hey, check out these earrings I got at Claire's!</h1>;
}

ReactDOM.render(message, document.getElementById("app"));

//Conditionals: The ternary operator x ? y : z
//truthy or falsey
const headline = <h1>{age >= drinkingAge ? "Buy Drink" : "Do Teen Stuff"}</h1>;

//example 2 - {pics[ternary]} because accessing pics object
function coinToss() {
    return Math.random() < 0.5 ? "heads" : "tails";
}

const pics = {
    kitty: "https://content.codecademy.com/courses/React/react_photo-kitty.jpg",
    doggy: "https://content.codecademy.com/courses/React/react_photo-puppy.jpeg",
};

const img = <img src={pics[coinToss() === "heads" ? "kitty" : "doggy"]} />;

//Conditionals: && - used if you need to do something or nothing at all (ignored and not rendered)
//if left is true, right will be rendered
const tasty = (
    <ul>
        <li>Applesauce</li>
        {!baby && <li>Pizza</li>}
        {age > 15 && <li>Brussels Sprouts</li>}
        {age > 20 && <li>Oysters</li>}
        {age > 25 && <li>Grappa</li>}
    </ul>
);

//example 2
const judgmental = Math.random() < 0.5;

const favoriteFoods = (
    <div>
        <ul>
            <li>Rhubarb Pie</li>
            {!judgmental && <li>Nacho Cheez Straight Out The Jar</li>}
            <li>Broiled Grapefruit</li>
        </ul>
    </div>
);

ReactDOM.render(favoriteFoods, document.getElementById("app"));

//.map() - create list of JSX elements
const strings = ["Home", "Shop", "About Me"]; //items

const listItems = strings.map((string) => <li>{string}</li>); //convert items into list elements

<ul>{listItems}</ul>; //list container

//example 2
const people = ["Rowe", "Prevost", "Gare"];

const peopleLis = people.map((person) => <li>{person}</li>);

ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById("app"));

//keys are unique ids when creating list - not used when:
//1. must be remembered as checked off
//2. order is shuffled
const people = ["Rowe", "Prevost", "Gare"];

const peopleLis = people.map((person, i) => (
    <li key={"person_" + i}>{person}</li>
));

ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById("app"));

//React without JSX
const h1 = <h1>Hello world</h1>;

const h1 = React.createElement("h1", null, "Hello, world");

//example 2
const greatestDivEver = <div>i am div</div>;

const greatestDivEver = React.createElement("div", null, "i am div");

//for...in loop
const todo = ["Make bed", "Brush teeth", "Eat breakfast"];

const list = [];
for (const item in todo) {
    list.push(<li>{item}</li>);
}

//example 2
import { animals } from "./animals";

const images = [];

for (const animal in animals) {
    images.push(
        <img
            key={animal}
            className="animal"
            alt={animal}
            src={animals[animal].image}
            aria-label={animal}
            role="button"
        />
    );
}

return { images };
