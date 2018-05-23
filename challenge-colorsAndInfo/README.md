# SVG Challenge
###  Manipulating a SVG and showing info
* Make a new html document
* load map.svg and data.json into your document
* change color on a area on mouseover
* change the color back on mouseout
* show info about the cities - cityname and tax base , in a div/article
* Show the citynames with a starting capital letter

## Hint
Use the svg objects fill attribute.

the citynames and svg id's correspond

you might need to use selectors like:
 
 ```
  document.querySelectorAll("#map g[id]");
  
  event.target.parentElement.id;
  
  ```
 
