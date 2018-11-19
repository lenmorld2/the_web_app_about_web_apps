### Handling `this` in React

For React methods that need access to `this`
such as event handlers, there are a lot of ways to bind them.
The following approaches mostly apply when you aare using
ES6 classes in React (`class Coffee extends React.Component`)
since you don't have access to `this.state`

1. Inline functions, or functions defined inside `render()`

a. Binding

```javascript
render() {
    ...
    <input onChange={this.handleChange.bind(this)}>
    ...
``` 

b. Arrow functions


```javascript
render() {
    ...
   <input onChange={() => this.handleChange()}
    ...
```

GOOD
> terse and clear, especially the arrow function solution

BAD
> This has performance impications, since the function is reallocated on every render.
> In other words, each time the component instance is rendered, 
> a new function with a new identity is created. To avoid this, use #2.

**Note about React reconciliation**

When `setState` is called, the reconciliation algorithm compares old React elements to new ones, 
to know which DOM elements to update. 

To optimize, you can use `shouldComponentUpdate` (return false) 
or extend `PureComponent` (compare props and state) to make 
React skip the element diff when there is no change.
But since functions in JS are objects, inline functions always fail the strict equality comparison 
on the prop diff. This moves on to the diffing of more expensive React elements,
which comes up empty and time is wasted on both diffs.

```javascript
// first render
<Avatar user={{ id: ‘ryan’ }}/>

// next render
<Avatar user={{ id: ‘ryan’ }}/>

// prop diff thinks something changed because {} !== {}
// element diff (reconciler) finds out that nothing changed

```
[ from: https://gist.github.com/ryanflorence/70f9ca97de0606212424694a3629428d ]

To solve this, we need to have **referential identity** for functions, 
which could be challenging. This leads us to the next solutions.

NOTE: Avoiding inline functions can be a *premature optimization*, so measure performance 
first. Also, achieving pure-rendered components require immutable data (you might need Redux for this).

References and further reading:
- https://medium.com/@esamatti/react-js-pure-render-performance-anti-pattern-fb88c101332f
- https://cdb.reacttraining.com/react-inline-functions-and-performance-bdff784f5578
- https://reactjs.org/docs/reconciliation.html


2. Binding in constructor

```javascript
constructor(props) {
  super(props);
  this.handleChange = this.handleChange.bind(this);
}

render() {... }
```

GOOD:
> bound in constructor so no performance overhead

BAD:
> readability and maintenance: as you have more functions, you'll have
> a lot of binding in constructor and you might forget one
> repetition of code


3. Class property arrow function

```javascript
handleChange = () => {
  // call this function from render 
  // and this.whatever in here works fine.
};

render() {... }
```

GOOD:
> readability and maintenance ✔️
> performance ✔️
BAD:
> need non-standard (yet) stage-3 features
> Must enable `transform-class-properties` or
> `stage3` in Babel

Remember that this works since arrow functions keep the 
**this** binding of the enclosing scope, which in the case of ES6 classes, 
is the component instance `this`

...

Whichever technique you will use,
it is **very important** to measure performance first before 
optimizing. Like in the case with #1, most performance issue would be negligible in smaller apps.
And any of the alternatives has effects in terms of readability, localization of code, size, usage of libraries and 
non-standard but upcoming JS features, etc.

Pick your poison, but choose the mose suitable one.


References:

https://medium.freecodecamp.org/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56
