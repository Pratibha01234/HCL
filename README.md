# Node JS Exercises

# Exercise 1

Consider the following code snippet:

```javascript
console.log("first");
setTimeout(function() {
    console.log("second");
}, 0);
console.log("third");
```

The output will be:

```
first
third
second
```

Can you rewrite this code using promises to obtain the desired behaviour?



# Exercise 2

Consider the following JSON object:

```
{
  'name': 'test',
  'list': ['', 'abc', null, 'def', undefined],
  'list 2': [
    { 'deeper': ['hello', '', 'world', '!' ]},
    {},
    { 'deeper': null },
    { 'deeper': 1234, 'deep': { 'deep': { } } }  
  ],
  'list-3': [ {}, { 'deep': [] } ] 
}
```

Can you write code to remove empty property from the object?

# Expected Deliverables

Project containing package.json, source and any testing framework libraries can be used.
