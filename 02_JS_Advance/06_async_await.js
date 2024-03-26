//we can declare a function async.
//1. It allows us to use await keyword.(await can only be declared inside async function)
//2.if we declare a function async, it allows consumption of a promise using await.
//3. async function always converts return value to a promise.

async function processing (){
  let downloadedData = await fetchData('www.google.com');
  console.log('downloading await complete');
  let file = await writeFile(downloadedData);
  console.log('writing await completed');
  let uploadResponse = await uploadData(file, 'www.drive.google.com');
  console.log('uploading await completed');
  console.log('completed process with response', uploadResponse);
  return true;
}

processing();