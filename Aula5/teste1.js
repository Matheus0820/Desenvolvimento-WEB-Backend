num1 = 1
num2 = 3

teste1(num1, num2, (err, sum) => {
    console.log(sum);
})

console.log("A soma é:")

function teste1(num1, num2, callback){
    sum = num1 + num2 
    callback(null, sum)
}