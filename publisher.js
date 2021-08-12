var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://192.168.43.254');

client.on('connect', function () {
    setInterval(function() {
        client.publish('myTopic', 'Hello mqtt');
        console.log('Message Sent');
    }, 5000);

    client.subscribe('response-server')
});

client.on('message', function(topic, message) {
    context = message.toString();
    console.log(`publisher ${topic} => ${context}`)
})