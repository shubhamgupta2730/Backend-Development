import {readfile} from 'fs/promises';
 const filePath= new URL('./02_index.js', import.meta.url, 'utf-8');
 const data = await readFile(filePath);
 console.log(data); 
