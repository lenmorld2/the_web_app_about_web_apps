### Array methods

#### map()

```javascript

[1,2,3].map(function(item) {
	return item+1; 
});

// [2,3,4]

arr = [
    {"name": "Lenny", "id": 1},
    {"name": "Manny", "id": 2},
    {"name": "Timmy", "id": 3},
]

Object.keys(arr).map(function(item) {
    return `${arr[item]["name"]} ${arr[item]["id"]} ` 
});

// ["Lenny 1 ", "Manny 2 ", "Timmy 3 "]
```

#### filter()

```javascript

console.log(`=== demo of js Array-object filter() ===`);
 arr = [
    {"name": 'abc', "num": 123}, 
    {"name": 'def', "num": 456}, 
    {"name": 'ghi', "num": 789}
  ];

// orig
console.log(`Orig array: ${JSON.stringify(arr, null, 2)}`);
console.log("---search---");

// filter to search an item
var searchString = 'ghi';
var result = arr.filter(function(item) {return item["name"] === searchString});
console.log(`Search 'ghi' result: ${JSON.stringify(result)}`);
console.log("---delete---");

// filter to delete an item
arr = arr.filter(function(item) {return item["name"] !== searchString});
console.log(`After deleting 'ghi', array: ${JSON.stringify(arr, null, 2)}`);

```

#### reduce()


```javascript

console.log("Demo of JS reduce()");
const arr = [{id: 1, age: 27, name: "Lenny"}, {id: 2, age: 30, name: "Jimmy"}, {id: 3, age: 45, name: "Manny"}];
console.log(`Array: ${JSON.stringify(arr, null, 2)}`);
const result = arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
    
 console.log(`Equivalent object: ${JSON.stringify(result, null, 2)}`);
 const age_sum = arr.reduce((acc, curr) => {
      acc += curr.age;
      return acc;
    }, 0);
    
 console.log(`Total age: ${JSON.stringify(age_sum, null, 2)}`);

```
