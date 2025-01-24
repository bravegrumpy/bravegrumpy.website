async function sleep(ms, message = "") {
  console.log(message);
  //console.log(`Sleepingg for ${ms}ms`);
  return await new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function truthyTest(wait = 500) {
  await sleep(wait, "Starting truthy test...");
  console.log("Truthy test completed");
  return true;
}

async function falsyTest(wait = 500) {
  await sleep(wait, "Starting falsy test...");
  console.log("Falsy test completed");
  return false;
}

export default async function test() {
  await console.assert(
    await truthyTest(),
    "Something is wrong with the tests.",
  );
  await console.assert(
    await falsyTest() == false,
    "Tests are working properly",
  );
}

test();
