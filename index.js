const net = require('net');

require('dotenv').config();

const PORT = process.env.PORT || 3000;

const server = net.createServer(function (socket) {
    socket.on('data', function (data) {
        receiveData(data, socket);
    });

    socket.on('error', function (error) {
        console.log('Error message:', error);
    });
});

server.listen(PORT, () => {
    console.log('TCP server is listening on port ' + PORT);
    console.log('TCP server started');
});

function receiveData(data, socket) {
    //socket.write(Buffer.alloc(1,1));

    // Process the received data if needed
    console.log('Received data:', data.toString());

    // Send a response back to the client
    const responseData = 'Data received successfully';
    socket.write(responseData);

    // Close the socket after sending the response
    socket.end();
}