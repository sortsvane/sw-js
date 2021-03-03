self.addEventListener('push', function(event) {
  const promiseChain = self.registration.showNotification(event.data.text());

  event.waitUntil(promiseChain);
});

// self.addEventListener('push', function (event) {
//   if (event.data) {
//     // Returns string
//     console.log()

//     // Parses data as JSON string and returns an Object
//     // console.print(event.data.json())

//     // Returns blob of data
//     console.log(event.data.blob())

//     // Returns an arrayBuffer
//     console.log(event.data.arrayBuffer())
//   }
// });