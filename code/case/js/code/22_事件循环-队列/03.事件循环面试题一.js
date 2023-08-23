setTimeout(function () {
  console.log("setTimeout1");         // 6
  new Promise(function (resolve) {
    resolve();
  }).then(function () {
    new Promise(function (resolve) {
      resolve();
    }).then(function () {
      console.log("then4");        // 8
    });
    console.log("then2");        // 7
  });
});

new Promise(function (resolve) {
  console.log("promise1");    // 1
  resolve();
}).then(function () {
  console.log("then1");      // 3
});

setTimeout(function () {
  console.log("setTimeout2");     // 9
});

console.log(2);      // 2

queueMicrotask(() => {
  console.log("queueMicrotask1")       // 4
});

new Promise(function (resolve) {
  resolve();
}).then(function () {
  console.log("then3");          // 5
});


// promise1
// 2
// then1
// queueMicrotask1
// then3
// setTimeout1    
// then2
// then4
// setTimeout2