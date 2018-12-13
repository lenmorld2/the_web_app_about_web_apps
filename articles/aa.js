function fetchData() {
  return new Promise(function(resolve, reject) {
    // do something that results to either error or data
    if (error) {
        reject(error);
    } else {
        resolve(data);  
    }
  });
}

//ES5
fetchData().then(function(result){
    doSomething(result);
}).catch(function(error) {
    throw error;
});

// ES6
fetchData().then(result => {
    doSomething(result);
}).catch(error => {
    throw error;
});