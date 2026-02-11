const EventEmitter = require('events');

const eventBus = new EventEmitter();

eventBus.on('userLogin', () => {
  console.log('Event: userLogin');
});

eventBus.on('dataFetched', () => {
  console.log('Event: dataFetched');
});

module.exports = eventBus;
