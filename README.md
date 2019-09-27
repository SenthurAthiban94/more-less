# more-less

# Installation
```shell
$ npm install more-less --save
```

# Usage
```javascript
import React, { Component } from 'react'
import moreLess from 'more-less';

// Set Configurations
let config = {
  text:'I am going to get shrinked and expanded',   // (required) Text that has to be collapse and expand on specified length
  shortTo:100,                                      // (optional) Length of the text at which it has to be shrinked. Default is 100 Characters
  id:'<< Element id>>',                             // (optional) Identifies the element in the html dom
  moreText:'Read more',                             // (optional) Text to be shown to expand. Default is Read more
  lessText:'Read less',                             // (optional) Text to be shown to shrink. Default is Read less
  isMobile:false,                                   // (optional) Enable functionality only for mobile. Default is FALSE
  continuous:false                                  // (optional) New Line for expand and shrink text. Default is FALSE
}


export default class Example extends Component {
  render() {
    return (
      <div>
        {moreLess(config)};
      </div>
    )
  }
}

```