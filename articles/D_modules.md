Modules are very important in readability and separation-of-concerns. The term "modularity" is one of the non-functional requirements of a good software.


generally, it is better to use **named expo** especially for tooling

vs **default exports**

TODO: elaborate this
also using aliases eg. import lenny as len

Before ES6, JS didn't support modules natively. Standards like AMD, RequireJS, and CommonJS were among the ways to get around it.

```javscript
var React = require('react');
```

ES6 modules use `import` and `export`.

```javscript
import React from 'react';
```

In React, each component, is usually in its own module, and is made available to other components via `export`;

```javscript
class Coffee extends React.Component {
  ...
}

export default Coffee;
```

Any other React component can then `import` the module and use it
```javascript
// React component

import Coffee from 'coffee';

class Breakfast extends React.Component {
  ...
  render() {
    return(
        ...
        <Coffee milk={2} />  
    );
  }
}
```


However, ES6 modules and all other ES6 features are not completely supported by browsers yet. Thus, we need to transpile ES6 code into ES5 using a transpiler, like Babel.
To ease development, Babel is usually included in JS bundlers, like Webpack. 

Read more about Webpack here
[Webpack] (/link/to/webpack/article)
