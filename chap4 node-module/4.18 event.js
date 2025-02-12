const EventEmitter = require("events");
const emitter = new EventEmitter();

const callback1 = (args) => {
  console.log("1st cb - ", args);
};

emitter.on("ellie", callback1);
emitter.on("ellie", (args) => {
  console.log("2nd cb - ", args);
});

emitter.emit("ellie", { message: 1 });
emitter.emit("ellie", { message: 2 });

// emitter.removeListener("ellie", callback1);
emitter.removeAllListeners();

emitter.emit("ellie", { message: 3 });
