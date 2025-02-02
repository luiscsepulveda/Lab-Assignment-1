/* Create a JavaScript file to use the Node.JS built-in function to read text file contents.
 Use the function that supports non-blocking operation (not the blocking one) 
      */
     
 // Import Node js file System
import fs from 'node:fs';

// non-blocking read file 
        fs.readFile('text.txt', 'utf8', (err, data) => {
            if (err) {
                console.log("I can't your file", err)
            }else{
                console.log("FIle read successfully")
                console.log("text.tx content: ", data)
            }
          });

          

