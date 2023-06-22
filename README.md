

Memoizer

The memoizer function is a utility function that can be used to create a memoized version of a given function. Memoization is a technique used to cache the results of expensive function calls and avoid redundant computations.

**How it Works**

The memoizer function internally uses a cache object to store the results of previous function calls. The cache is implemented as a key-value pair, where the key is a string representation of the function arguments, and the value is the result of the function call.

When the memoized function is called, it checks if the arguments already exist in the cache. If so, it retrieves the result from the cache and returns it. Otherwise, it calculates the result by invoking the original function (func), stores the result in the cache for future use, and returns the calculated result.

I have created index.html file to see the logs in the browser console.

**How to execute**
Need to cd into Memoizer Folder to run the command 'npx tsc memoizer.ts' and open index.html to see the logs in the browser console.



NumberConversion

**How to execute**
Need to cd into NumberConversion Folder to run the command 'npx tsc numberConversion.ts' and open index.html to see the logs in the browser console.


AccountManagement

**How to execute**
Need to cd into api folder and run the command 'npx tsc --watch', so that .js files are added and then run the command 'node index.js' the App will be listening on PORT 3000
Open http://localhost:3000/, you can see the account data
We can GET data, Post the data, UPDATE and DELETE it by trying any API testing tool like Postman or SmartBear.
