import fs from 'fs';
import path from 'path';

export function readJsonFile(fileName) {
    const candidates = [
        path.resolve(__dirname, '..', fileName),
        path.resolve(__dirname, fileName),
        path.resolve(process.cwd(), fileName),
        path.resolve(process.cwd(), 'data', fileName),
        path.resolve(__dirname, '..', 'data', fileName)
    ];

    const filePath = candidates.find((candidate) => fs.existsSync(candidate));

    if (!filePath) {
        throw new Error(`JSON file not found: ${fileName}. Tried: ${candidates.join(', ')}`);
    }

    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
}
