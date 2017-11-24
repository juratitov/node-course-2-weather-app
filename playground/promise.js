var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === "number" && typeof b === "number") {
                resolve(a + b);
            } else {
                reject("Arguments must be numbers");
            }
        }, 1500);
    });
};

asyncAdd(5, '7').then((res) => {
    console.log('Results: ', res);
    return asyncAdd(res, 33);
}).then((res) => {
    console.log('Should be 45 =', res);
}).catch((error) => {
    console.log(error);
});

// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("It is work!!!");
//         //reject('Unable to fulfill promise');
//     }, 2500);
// });

// somePromise.then(
//     message => {
//         console.log("Success: ", message);
//     },
//     error => {
//         console.log("Error: ", error);
//     }
// );
// console.log("After promise");