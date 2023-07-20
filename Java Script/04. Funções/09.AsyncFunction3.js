function delay(milliseconds) {
  return new Promise(resolve => {
    setTimeout(resolve, milliseconds);
  });
}

async function doSomethingThatNeedsTime(milliseconds) {
  await delay(milliseconds);
  return {
    status: 200
  };
}

const promise1 = doSomethingThatNeedsTime(1000);
const promise2 = doSomethingThatNeedsTime(2000);
const promise3 = doSomethingThatNeedsTime(3000);

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});