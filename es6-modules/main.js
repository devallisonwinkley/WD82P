import "./style.css";
import { dogFactory, catFactory } from "./factories/dogFactory";

const dog1 = dogFactory("Doggy", "Golden Retriever");

console.log(dog1);

const cat1 = catFactory("Miming", "Siamese");

console.log(cat1);

document.querySelector("#app").innerHTML = `
  <div>
    <p>My dog's name is ${dog1.name} and he is a ${dog1.breed}!<p>
  </div>
`;
