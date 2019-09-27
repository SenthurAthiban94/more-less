# more-less
This package can be used to collapse or expand your large content to the specified length mentioned in the configuration with a (Read more / Read less) link.

# Installation
```shell
$ npm install more-less --save
```
# Usage
```javascript
// Import Package
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

moreLess(config);       // Returns the html String to be rendered in to HTML
```


# CSS Customization
```css
/* Styles of triple dots*/
#readMore-dots-/*Id*/{
    color:black;
}
/* Styles of collapsed text */
#readMore-more-/*Id*/{
    /* ... */
}
/* Styles of Read More / Read Less Text */
#readMore-/*Id*/{
    color:blue;
}
```

# Example

## Custom CSS (styles.css)
```css
#readMore-dots-exampleId{
    color:black;
}
/* Styles of collapsed text */
#readMore-more-exampleId{
    color:grey;
}
/* Styles of Read More / Read Less Text */
#readMore-exampleId{
    color:blue;
}
```

## Index.js
```javascript
import moreLess from 'more-less';
import React, { Component } from 'react'
import './styles.css';

export default class Example extends Component {
  render() {
    let config = {
        text:'I am going to get shrinked and expanded',
        shortTo:15,                                   
        id:'exampleId',                          
        moreText:'Open',                          
        lessText:'Close',                          
        isMobile:false,                                
        continuous:true                               
    };
    return (
      <div 
      dangerouslySetInnerHTML={{__html: moreLess(config)}}
      />
    )
  }
}
```