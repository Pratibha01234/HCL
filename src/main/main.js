const express = require('express');
const app = express();

var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Code exercises app listening at http://%s:%s", host, port)
})

app.get('/', function(req, res){
    res.send("success");
});


// exercise1 api to print first, third, second
app.get("/exercise1", function(req, response){
    var afterClean = changeOrder();
    response.status(200, {'Content-Type': 'text/plain'});
    response.send("success");
});




/* Exercise 1 */
function changeOrder(){
    console.log("first");
    var promise1 = new Promise(function(resolve, reject) {
        setTimeout(function(){
            console.log("second");
        });
    });
    console.log("third");

}

// exercise2 api to remove empty property from json object
app.get('/exercise2', function (req, res)  {
    var obj = {
        'name': 'test',
        'list': ['', 'abc', null, 'def', undefined],
        'list 2': [
            { 'deeper': ['hello', '', 'world', '!' ]},
            {},
            { 'deeper': null },
            { 'deeper': 1234, 'deep': { 'deep': { } } }
        ],
        'list-3': [ {}, { 'deep': [] } ]
    };
    var afterClean = deleteEmptyProperty(obj);
    res.status(200, {'Content-Type': 'text/plain'});
    res.send(afterClean);
});


/* Exercise 2 */
function deleteEmptyProperty(myObject) {

    // Loop through the object
    for (var key in myObject) {

        if (typeof(myObject[key]) === 'object') {
            // Check if its an array or an Object
            var length = myObject[key].length;
            if (length === undefined) {

                for (var keyInner in myObject[key]) {
                    if (myObject[key][keyInner] === undefined) {
                        delete myObject[key][keyInner];
                    }
                }
            }
            else
            {
                // For array loop through all the elements to check if it is an empty property.
                deleteEmptyPropFromArray(myObject[key]);

            }
        }else{
            if (myObject[key] === undefined){
                delete myObject[key];
            }

        }

    }
}
function deleteEmptyPropFromArray(array) {

    for (var i = 0; i < array.length; i++) {

        var arrayElement = array[i];
        if (arrayElement == null || arrayElement == undefined) {
            delete array[i];
        }else if(typeof(arrayElement) === 'object'){
            if(Object.keys(arrayElement).length === 0 && arrayElement.constructor === Object){
                delete array[i];
            }

        }

    }
}
