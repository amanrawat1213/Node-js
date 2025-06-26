// The path module in Node.js is a core built-in module that provides utilities for working with file and directory paths.
//  It is crucial for handling and transforming paths in a way that is consistent across different operating systems,
//  which use different path separators (e.g., forward slashes / in Unix-based systems and backslashes `\` in Windows).


import path from "path"
// it will show the entire functions available in path module
console.log(path)
// i want to know the extension name of the file
let mypath="C:\\Users\\amanr\\OneDrive\\Desktop\\MERN STACK\\harry.txt"
console.log(path.extname(mypath))

// If i want to know the dir name
console.log(path.dirname(mypath))