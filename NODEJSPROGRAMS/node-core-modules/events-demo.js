import EventEmitter from "events";

// create an event emitter object
const emitter = new EventEmitter();

// listen to an event
emitter.on("greet", (name) => {
  console.log(`Hello ${name}, welcome to Node.js Events!`);
});

// emit (trigger) the event
emitter.emit("greet", "Ravi");