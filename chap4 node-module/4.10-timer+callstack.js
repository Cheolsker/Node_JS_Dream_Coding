console.log("code1");
console.time("timeout 0");
setTimeout(() => {
  console.log("setTimeout 0"); // 2
  console.timeEnd("timeout 0");
}, 0);

console.log("code2");
setImmediate(() => {
  console.log("setImmediate"); // 3
});

console.log("code3");
process.nextTick(() => {
  console.log("nextTick"); // 1
});
