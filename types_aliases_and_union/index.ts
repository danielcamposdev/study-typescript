// type alias
type Uid = number | string;

function logDetails(uid: Uid, item: string) {
  console.log(`uid -> ${uid} item -> ${item}`);
}

logDetails("user", "1");
logDetails(123949, "1");

// type alias fixo
type Platform = "Windows" | "Linux" | "Android";

function showPlatform(platform: Platform) {
  console.log(platform);
}

showPlatform("Android");
//showPlatform("ios"); // error
