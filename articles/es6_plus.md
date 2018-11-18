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
> This affects performance, since the function is reallocated on every render.
> In other words, each time the component instance is rendered, 
> the function is re-declared 
