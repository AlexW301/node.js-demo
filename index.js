// const {readFile, readFileSync} = require('fs');

// const txt = readFileSync('./hello.txt', 'utf8');

// readFile('./hello.txt', 'utf8', function(err, test) {
//     console.log(test, '1st');
// });

// console.log(txt);

// const {readFile} = require('fs').promises;

// async function hello() {
//     const file = await readFile('./hello.txt', 'utf8');
//     console.log(file)
// }

// hello();

// console.log('test')

const { readFile } = require("fs").promises;

const myModule = require("./my-module");
const express = require("express");
const app = express();
const { appendFile } = require("fs");

app.get("/", async (request, response) => {
    response.send(await readFile('./home.html', 'utf8'));
//   readFile("./home.html", "utf8", (err, html) => {
//     if (err) {
//       response.status(500).send("sorry, out of order");
//     }
//     response.send(html);
//   });
});

app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'));

console.log(myModule);
