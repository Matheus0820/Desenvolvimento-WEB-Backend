async function myDisplay() {
 let myPromise = new Promise(function(resolve) {
 setTimeout(function() {resolve("I'm still here!!" );}, 3000);
 });
 console.log(await myPromise);
}
myDisplay();