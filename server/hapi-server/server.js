'use strict'
const Hapi = require('hapi');

// server variable
const server = Hapi.server({
    port:'3001',
    host:'localhost'
});

// Common Routes for configuring the server to work perfectly
server.route({
    method: 'GET',
    path: '/jsonresponse',
    handler: (request, response) =>{
        let object = {
            myfirst: 'Element',
            elepant: 'Elephant'
        }
       return JSON.stringify(object);
    }
});

server.route({
    method: 'GET',
    path: '/',
    handler: (request, response) =>{
       return response.file(__dirname+'/build/index.html');
    }
})

//function initiated when the server is called
const init = async () => {

    await server.register(require('inert'));

    await server.start();
    console.log(
        'Server running at port '
    )
}

process.on('unhandledRejection', (err) =>{
    if(err){
        console.log(err);
    }
    process.exit(1);
});

init();
