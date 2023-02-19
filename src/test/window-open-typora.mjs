import * as child_process from 'child_process';

let filePath = 'c:\Users\Lee\Desktop\vue2-test\README.md';
console.log(filePath);

// 都不行，命令行中可以打开
// child_process.exec(`typora ${filePath}`);
// child_process.exec(`typora "${filePath}"`);

filePath = 'c:\\Users\\Lee\\Desktop\\vue2-test\\README.md';
console.log(filePath);
// 都不行，命令行中可以打开
// child_process.exec(`typora ${filePath}`);
// child_process.exec(`typora "${filePath}"`);