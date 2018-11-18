### Handling `this` in React

For React methods that need access to `this`
such as event handlers, there are a lot of ways to bind them.
The following approaches mostly apply when you aare using
ES6 classes in React (`class Coffee extends React.Component`)
since you don't have access to `this.state`

1. Inline functions, or functions defined inside `render()`

a. Binding

`<input onChange={this.handleChange.bind(this)}>` 

b. Arrow functions

`<input onChange={() => this.setState()}`


GOOD
> terse and clear, especially the arrow function solution

BAD
> This has performance impications, since the function is reallocated on every render.
> In other words, each time the component instance is rendered, 
> a new function with a new identity is created. To avoid this, use #2.
> There are times that you want this though,
> e.g. if the function input depends on a prop change

Avoiding inline functions can also be a *premature optimization*,
since pure-rendered components require immutable data (you might need Redux for this).

References:
- https://medium.com/@esamatti/react-js-pure-render-performance-anti-pattern-fb88c101332f
- https://cdb.reacttraining.com/react-inline-functions-and-performance-bdff784f5578

2. Binding in constructor





...

Whichever technique you will use,
it is **very important** to measure performance first before 
optimizing. Like in the case with #1, most performance issue would be negligible in smaller apps.
And any of the alternatives has effects in terms of readability, localization of code, size, usage of libraries and 
non-standard but upcoming JS features, etc.

Pick your poison, but choose the mose suitable one.
