// function getUsers(callback) {
//   // simulate network delay
//   setTimeout(() => {
//     const users = ["John", "Jack", "Abigail"];
//     callback(users);
//   }, 3000);
// }

// function usersCallback(users) {
//   console.log(users);
// }

// getUsers(usersCallback);

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

function usersCallback(error, users) {
  if (error) {
    console.log("process failed: ", error.message);
    return;
  }

  console.log("process success: ", users);
}

getUsers(false, usersCallback);
getUsers(true, usersCallback);
