const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error");
    return;
  }
  const first = data;
  readFile("./content/second.txt", "utf-8", (err, data) => {
    if (err) {
      console.log("Error");
      return;
    }
    const second = data;
    writeFile(
      "./content/result-async.txt",
      `Here is  Result : ${first} , ${second}`
    ,(err,data)=>{
      if(err){
        console.log("Error");
        return;
      }
      console.log(data);
    });
  });
});
