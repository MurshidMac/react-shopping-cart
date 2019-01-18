'use strict'
const Hapi = require('hapi');

const server = Hapi.server({
    port:'3001',
    host:'localhost'
});


const init = async () => {
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
