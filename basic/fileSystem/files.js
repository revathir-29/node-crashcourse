const fs = require('fs');

//reading file
/*
fs.readFile('./docs/blog1.txt' , (err , data) => {
    if(err) {
        console.log(err);
    }
    console.log(data.toString());
});
console.log('----------');
*/

//writing file
/*
//The file that will already exist 
fs.writeFile('./docs/blog1.txt' , 'Hello React' , () => {
    console.log('File was written');
});

//The file that didn't already exist
fs.writeFile('./docs/blog2.txt' , 'Welcome React' , () => {
    console.log('File was created and written');
});
*/

//Directories
/*
fs.mkdir('./assests', (err)=>{
    if(err) {
        console.log(err);
    }
    console.log('Folder created');
})
    */
   //Check If the folder is exist or not , if not exist means run the code if exist means delete that
   /*
if(!fs.existsSync('./assets')){
   fs.mkdir('./assets', (err)=>{
    if(err) {
        console.log(err);
    }
    console.log('Folder created');
}) ;
}  else {
    fs.rmdir('./assets' , (err) => {
        if(err) {
           console.log(err);
        }
        console.log("Folder deleted");
    })
}
    */

//Deleting files

if(fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt' , (err) => {
        if(err) {
            console.log(err)
        }
        console.log('File deleted');
    })
}

