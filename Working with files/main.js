// Introduction to Node.js File System
// The Node.js File System module (fs) provides a comprehensive set of methods for working with the file system on your computer.

// It allows you to perform file I/O operations in both synchronous and asynchronous ways.
// Note: The File System module is a core Node.js module, so no installation is required.
// Importing the File System Module
// You can import the File System module using CommonJS require() or ES modules import syntax:



const fs = require("fs")
console.log("starting")
// Write filesync can stop the thread and process itself when written( it is synchronus in nature)
// fs.writeFileSync("harry.txt", "Harry is a good boy")

// then we have writeFile in which we can use the functionality of callback as it will be scheduled for processing(it is asynchronous)
// fs.writeFile("harry2.txt", "Harry is a good boy2", ()=>{
//     console.log("done")
// })
// console.log("ending");

// similarly if i want to read a file once it is written i can use the call back functionality calling the another function
// fs.writeFile("harry2.txt", "Harry is a good boy2", ()=>{
//     console.log("done")
//     fs.readFile("harry2.txt",(error,data)=>{
//         console.log(error,data.toString());
//         // i have used the to string function to convert the output of data to string so that it can be readable
//     })
// })


// if you want to append a data to a file at the end use appendFile function can also be used 
fs.appendFile("harry.txt", "harryrobo", (e, d)=>{
    console.log(d)
})

// difference between write functions and append
// writeFile: Overwrites the entire file.
// appendFile: Adds data to the end of the file.