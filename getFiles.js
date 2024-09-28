import fs from 'fs';
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const defaultDirectory = __dirname;
const html = '.html';

export default function  getFilenames(currentDirectory=defaultDirectory, fileType=html) {
    
    const filenames = fs.readdirSync(currentDirectory).filter(file => {
        const filePath = path.join(currentDirectory, file);
        const isFile = fs.statSync(filePath).isFile();

        return isFile && path.extname(file) === fileType;
    });
    return filenames;
}


export const htmlFiles = getFilenames();
console.log(htmlFiles.length);