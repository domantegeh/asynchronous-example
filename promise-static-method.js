// promise all
const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));
Promise.all([promise1, promise2, promise3]).then((values) =>
  console.log(values)
);

const promiseA = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promiseB = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error("ups")), 2000)
);
const promiseC = new Promise((resolve) => setTimeout(() => resolve(3), 3000));
Promise.all([promiseA, promiseB, promiseC])
  .then((values) => console.log(values))
  .catch((error) => console.log(error.message));

// promise race
const promise4 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise5 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise6 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));
Promise.race([promise4, promise5, promise6]).then((values) =>
  console.log(values)
);

// promise all settled
const promiseD = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promiseE = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error("ups")), 2000)
);
const promiseF = new Promise((resolve) => setTimeout(() => resolve(3), 3000));
Promise.allSettled([promiseD, promiseE, promiseF]).then((values) =>
  console.log(values)
);

// promise any
// fulfilled sample
const promiseResolve1 = new Promise((resolve, reject) =>
  setTimeout(() => resolve("1"), 1000)
);
const promiseResolve2 = new Promise((resolve, reject) =>
  setTimeout(() => resolve("2"), 2000)
);
const promiseResolve3 = new Promise((resolve, reject) =>
  setTimeout(() => resolve("3"), 3000)
);
Promise.any([promiseResolve1, promiseResolve2, promiseResolve3])
  .then((value) => console.log(value))
  .catch((error) => console.log(error.message));

//rejected sample
const promiseReject1 = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error("1")), 1000)
);
const promiseReject2 = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error("2")), 2000)
);
const promiseReject3 = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error("3")), 3000)
);
Promise.any([promiseReject1, promiseReject2, promiseReject3])
  .then((value) => console.log(value))
  .catch((error) => console.log(error.message));
