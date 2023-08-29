# Javascript Notes

Javascript has different kinds of data.

Always end statement with semi-colon (exp: var message;)

console.log(""); - displaying data on the screen
alert(box); - displays data on the screen as well, but via pop-up

Sometimes you need to create a blank variable first and input the data later on. Best practice is to always put in the data once creating a variable.

~ let age = 18; //declaring = assigning
const birthdate = "05/01/1995"; //declaring = assigning

~ console.log(age); // calling
console.log(birthdate); // calling

# Different Variable/Container names:

1 var - old way of creating variables in JS and is not preferred anymore ; before let and const came to life - name of variable is up to you, but best to use camel casing (exp: myProducts ; thisIsMySuperLongVariableName) ; first word is not capitalised, only the second one ; there should be no spacing at all

2 let - new and current way of creating variables in JavaScript

3 const - preferred var name most of the time ; short for constant

> let age = 19;
> const birthdate = "05/01/19955";
> age changes, but bdates is constant. used const for bdate because it is a constant data

# Best Practices

> Variable naming should always start with a letter, a $ is also allowed. Do not start off with a number. Do not forget to use camel casing.

> You can do a capitalised variable name. It will always matter (exp: AGE and age are considered two different variables).

> Use English, not any other language, since it is a universal language.

> You cannot use reserved keywords for the variable name (let, const, class, function, return, etc).

> You can capitalise names of constant data (exp: const COLOR_GREEN = "#FF7F00"; console.log(COLOR_GREEN);)

~ const pageLoadTime = "..."; < this is not hard coding, so we can use const. it is not capitalised since it is not hard coded unlike the previous example with the constant HEX code for the page>
~ const ign = "Alezon" < this can be considered as hard coding, since the user's ign does not change over time>
