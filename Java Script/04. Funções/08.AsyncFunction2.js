function readFile() {
  return new Promise((resolve, reject) => {
    try {
      // Do something on the server
      //throw new Error('My error!');

      resolve({
        status: 200
      });
    } catch {
      reject({
        code: 404
      });
    }
  });
}

readFile()
.then((result) => {
  console.log(result);
})
.catch((error) => {
  console.log(error);
})
