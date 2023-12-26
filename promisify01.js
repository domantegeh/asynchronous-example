const { promisify } = require("util");

function getUsers(isOffline, callback) {
  // simulate network delay
  setTimeout(() => {
    const users = ["John", "Jack", "Abigail"];

    if (isOffline) {
      callback(new Error("can not retrieve users due offline"), null);
      return;
    }

    callback(null, users);
  }, 3000);
}

// create a promise version of getUsers
const getUsersPromise = promisify(getUsers);
getUsersPromise(true)
  .then((users) => console.log(users))
  .catch((err) => console.log(err.message));

getUsersPromise(false)
  .then((users) => console.log(users))
  .catch((err) => console.log(err.message));
