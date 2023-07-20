function delay() {
  return new Promise(resolve => {
    setTimeout(resolve, 1000);
  });
}

async function doSomethingThatNeedsTime() {
  await delay();
  return {
    status: 200
  };
}

const result = doSomethingThatNeedsTime();
console.log(result);