// ES6 Modules allow us to import and export functions so our codes can become more modular

// The export word will allow you to import(extract) the codes here to another js file

// Default means we will only return/export this one function and you do not need to use the curly braces upon exporting
export function dogFactory(name, breed) {
  return { name, breed };
}

export function catFactory(name, breed) {
  return { name, breed };
}

/* FOR EXPORTING MULTIPLE FILES/DATA - BUT, when you use this, you should remove the "export" term before the function syntax (ex: function dogFactory || function catFactory)

EXAMPLE:
export { dogFactory, catFactory };
*/
