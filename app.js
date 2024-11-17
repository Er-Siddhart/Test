// const http=require('http');//./http is the relative path, /http is the absolute path.

// const server=http.createServer((req,res)=>{
//     console.log(req);
// });

// server.listen(3001);


const http=require('http');
const PORT=3002;

const server=http.createServer((req,res)=>{//we created a server 
                            // using http core module.
    console.log(req);
});

server.listen(`${PORT}`);//using template literals.