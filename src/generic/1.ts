function getPromise(): Promise<[string, number]> {
  return new Promise((resolve) => {
    resolve(["Text", 50]);
  });
}

getPromise().then((data: [string, number]) => {
  console.log(data); // Output: ["Text", 50]
});
