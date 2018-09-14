### Using ES6 Arrow Functions to keep context of `this` in nested functions


TL;DR


When passing functions to methods like `map, filter, reduce` and other functions,
we lose the context of `this` object. We use arrow functions to keep the `this` inside the nested function.  

```javascript
  getFavorites() {
     return this.favorites.map((item) => {
        return this.name + " says " + item; 
     })
  } 
```

##### Explanation

In terms of an object (i.e. a class instance), arrow functions allows us to get the right handle on the current `this` keyword, inside of class methods. We usually want `this` to refer to the current object.

##### Sample code

```javascript
class Dog {
  constructor(name, age) {
     this.name = name;
     this.age = age;

     this.favorites = ["bone", "candy", "milk"]; 
  } 
  
  bark() {
    return this.name + ":" + this.age; 
  }

  getFavorites() {
     return this.favorites.map(function(item) {
        return this.name + " says " + item; 
     })
  } 
}
```

`var doggie = new Dog("brownie", 12);`
`doggie.bark()`  
->  "brownie:12"

`doggie.getFavorites()`
-> "Uncaught TypeError: Cannot read property 'name' of undefined"

##### 

Let's take a closer look at `getFavorites()` function.
This function takes each item in `favorites` array, prefixing it with `this.name`, and returning the phrases array. `map()` is the perfect method for this, since we are doing a 1-1 mapping, item -> phrase.

```javascript
  getFavorites() {
     return this.favorites.map(function(item) {
        return this.name + " says " + item; 
     })
  } 
```

The expected result is

`["doggie says bone", "doggie says candy", "doggie says milk" ]`

But instead we get this

-> "Uncaught TypeError: Cannot read property 'name' of undefined"



#### Why is this happening?


```javascript
getFavorites() { 
  return this.favorites.map( function )
}
```
Here, we still have access to `this`, i.e. `this.favorites`.

But, we are passing a function to map, which it uses to process each item. 

```
function(item) {
        return this.name + " says " + item; 
     }
```

However, being its own self-contained function, 
we don't have the context of `this` inside the function.


#### Classic solution 1

```javascript
  getFavorites() {
     var that = this;
     return this.favorites.map(function(item) {
        return that.name + " says " + item; 
     })
  } 
```

Here we are copying reference of `this` to `that`, 
so we can use `that.name` inside the map.
This works, but with an extra variable.

#### Classic solution 2

Using `function.bind(this)`

```javascript
  getFavorites() {
      return this.favorites.map(function(item) {
        return this.name + " says " + item; 
     }.bind(this));
  } 
```

This also works, but suffers a bit on readability and maintainability.
If you'll have 3 nested functions, then you'll have 3 binds.


### ES6 Arrow Function solution

```javascript
  getFavorites() {
     return this.favorites.map((item) => {
        return this.name + " says " + item; 
     })
  } 
```

Result: `["doggie says bone", "doggie says candy", "doggie says milk" ]`

Although the arrow function syntax looks a bit weird
`(item) => { return this.name + " says " + item; }`

We are able to keep the `this` as the handle to our object, 
even if we're inside the map function. This is also cleaner.

It may take some time to get used to ES6 arrow functions, 
but it gives options for succinct code. 
A lot of times, it is *optional* to use arrow functions, 
but for the case of binding `this`, there is a definite reason 
to use it, and not just for compactness.




