const fs = require("fs");
//1
fs.writeFileSync("./Hey.txt", "hello world");
// fs.writeFile("./Hey.txt", "hello world", (e) => {
//   if (e) console.log(e);
// });
//2
// fs.copyFile("./Hey.txt", "./copyHey.txt", (e) => {
//   if (e) console.log(e);
// });
fs.copyFileSync("./Hey.txt", "./copyHey.txt");
//3
fs.rename("./copyHey.txt", "./copiedAndRenamedHey.txt", (e) => {
  if (e) console.log(e);
});
//4
fs.readdir("./", (err, files) => {
  if (err) console.log(err);
  files.forEach((file) => {
    console.log(file);
  });
});
//5 delete
fs.unlink("./Hey.txt", (e) => {
  if (e) console.log(e);
});
