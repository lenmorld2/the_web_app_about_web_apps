# JS Intro

### Objects and arrays,

##### Arrays in arrays, objects in objects, array of objects, objects of array, etc

```
{
  song: "My Song",
  artists: ["You", "Me"],
  album: {
    name: "First album",
    id: 1
  }
}
```

#### This is also known as JSON (JS Object Notation)


### Functions and Callbacks

--- restaurant scenario----

one of the most confusing thing for people trying to learn JS is
Functions in functions, callbacks

```
function giveMeFood(food) {
  console.log("Preparing " + food);
  console.log("Here is your " + food);
}


function makeMeFood(food) {
  console.log("Preparing your " + food);
}


function bringMeMyFood(food) {
  console.log("Here is your " + food);
}

makeMeFood("pasta")
bringMeMyFood("pasta")

```

3 things wrong here:

1. we have to say twice what we want
2. we're too demanding! we asked two things right away!
3. we dont even know when is makeFood() goind to finish


#### Using callbacks
```
function makeMeFood(food, doAfter) {
   console.log("Preparing " + food);
   doAfter(food); 
}

function bringFoodToMyTable(food) {
   console.log("Here's your " + food);
}

makeMeFood("pasta", bringMeMyFood)
```


##### Anonymous function 
```
function makeMeFood(food, doAfter) {
   console.log("Preparing " + food);
   doAfter(food); 
}

makeMeFood("pasta", function (food) {
   console.log("Here's your " + food);
});
```

#### Blocking callback
```
// blocking callback
function delay(milliseconds) {
    // blocking delay
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function makeMeFood(food, doAfter) {
   console.log("Chef preparing " + food);
   delay(3000);
   doAfter(food); 
}

makeMeFood("pasta", function (food) {
   console.log("Server: Here's your " + food);
});
console.log("Me looking at phone...")
console.log("Me talking...")
```


#### Non-blocking callback
```
// non-blocking example
// async callback

function delay(ms, doIt, params) {
    // non-blocking delay
    setTimeout(function() {
      doIt(params);
    }, ms);
}

function makeMeFood(food, doAfter) {
   console.log("Chef preparing " + food);
   delay(3000, doAfter, food); 
}


makeMeFood("pasta", function (food) {
   console.log("Server: Here's your " + food);
})
console.log("Me looking at phone...")
console.log("Me talking...")
```

#### Reminder
async programming is also about re-structuring your code
its not a one - liner change from synchronous code


Other topics:

-> methapor into client - server
-> web client - server, browser
-> frontend, why async is important
-> backend, how Node put the whole concept into the backend side

- dont block the thread, since it's only one
- not good for CPU intensive applications
