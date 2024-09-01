const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3030;

const folderPath = path.join(__dirname, 'files');

if (!fs.existsSync(folderPath)){
    fs.mkdirSync(folderPath);
}
app.use(express.json());

app.post('/createfile', (req, res) => {
    const now = new Date();
    const timestamp = now.toISOString();
    const fileName = `${now.toISOString().replace(/[:.-]/g, '')}.txt`;
    const filePath = path.join(folderPath, fileName);

    fs.writeFile(filePath, timestamp, (err) => {
        if (err) {
            return res.status(500).send('Error writing file');
        }
        res.status(200).send('File created successfully');
    });
});

app.get('/listfiles', (req, res) => {
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            return res.status(500).send('Error reading directory');
        }
        const textFiles = files.filter(file => path.extname(file) === '.txt');
        res.status(200).json(textFiles);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
