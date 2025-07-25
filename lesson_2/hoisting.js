// Questions need to be able to answer:
// What is hoisting?
// How do var, let, and const interact with hoisting? How do they differ?
// How do functions and classes interact with hoisting? How do they differ?
// What part does hoisting play in the way a specific program works?
// How does hoisting really work?

// Declared Scope vs. Visibility Scope

// It helps to think of scope as having two separate but related definitions. One refers to how a variable is declared -- we'll call it the declared scope -- while the other concerns the visibility of a variable -- let's call it the visibility scope. Note that we're using these terms for convenience. 

// Declared scope concerns how a variable is declared: let, const, class, var, or function. The first three declare variables with block scope while the other two declare variables with function scope. Even if the variable is declared outside of a function or block, it has either block or function scope:

let foo = 1;        // declared scope is block scope
var bar = 2;        // declared scope is function scope

if (true) {
  let foo = 3;      // declared scope is block scope
  var qux = 4;      // declared scope is function scope
}

function bar() {    // declared scope is function scope
  let foo = 5;      // declared scope is block scope
  var bar = 6;      // declared scope is function scope

  if (true) {
    let foo = 7;    // declared scope is block scope
    var qux = 8;    // declared scope is function scope
  }
}

// We will typically talk about the declared scope when we discuss the scope that results from a declaration.

//Visibility scope concerns where a variable is visible. This can be either global scope or local scope (inside a function or a block). We will sometimes also talk about function and block scope when discussing the local visibility scope, though this is more about where the variable is visible rather than how it was declared. Thus, something declared with let can have function scope when talking about its visibility.

let foo = 1;        // visibility scope is global
var bar = 2;        // visibility scope is global

if (true) {
  let foo = 3;      // visibility scope is local (block)
  var qux = 4;      // visibility scope is global
}

function bar() {    // visibility scope is global
  let foo = 5;      // visibility scope is local (function)
  var bar = 6;      // visibility scope is local (function)

  if (true) {
    let foo = 7;    // visibility scope is local (block)
    var qux = 8;    // visibility scope is local (function)
  }
}

// We usually talk about the visibility scope when we talk about the scope of a particular variable. Thus, we can say the foo and bar on lines 1 and 2 have global scope, but foo and bar on lines 10 and 11 have local scope.

// Hoisting Isn't Real
// WHAT!!!? After all that, you're telling me that hoisting isn't real? Yup.

// Hoisting is really just a mental model that almost all JavaScript developers use to explain how scope works. There is no actual process that happens in JavaScript that is called hoisting. Until fairly recently, it wasn't even mentioned in the ECMAScript standards, and even now, it's barely mentioned in passing. What's more, the mental model of hoisting is not perfect -- there are edge cases that aren't properly explained by hoisting.

// The behavior that we try to explain with hoisting is merely a consequence of JavaScript's two phases: the creation phase and execution phase. The creation phase prepares your code for execution. Each time it encounters a variable, function, or class declaration, it adds that identifier to the current scope. Depending on the declaration and where the declaration occurs, the identifier gets added to either the global scope or the local scope (which may be either a function or a block). Thus, at the end of the creation phase, JavaScript knows all of the identifiers in your program and what scopes each one belongs to.

// When the execution phase occurs, JavaScript no longer cares about declarations. It does care about initialization and function/class definitions, but not the declarations themselves. The identifiers are already known, and their scope is already known. JavaScript merely needs to look up the identifiers as needed.

