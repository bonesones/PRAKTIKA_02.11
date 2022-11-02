const fs = require('fs');
const app = require('express')()

const host = '127.0.0.1'
const port = 7000

const content = fs.readFileSync('files/data.txt', 'utf8');
console.log(content);

fs.appendFile(
  'files/data.txt',
  `\n${content}`,
  'utf8',
  (err) => {
    if (err) throw err;

    console.log('Done');
  }
);

fs.unlink('files/data2.txt', (err) => {
  if (err) throw err;

  console.log('Deleted');
});

try {
  const exists = fs.existsSync('files');
  console.log('Exists: ', exists);
} catch (e) {
  console.log(e);
}

app.get('/', function (req, res) {
  res.send(content)
})

app.listen(port, host, function () {
  console.log(`Server listens http://${host}:${port}`)
}) 