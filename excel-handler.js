const XLSX = require('xlsx');
const path = require('path');

// 1. 读取 test.xlsx 文件
const filePath = path.join(__dirname, 'test.xlsx');
const workbook = XLSX.readFile(filePath);

// 获取第一个工作表名称
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// 将工作表转换为 JSON 数据
const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

console.log('读取到的原始数据:');
console.log(data);

// 2. 把"语文"更改为"语文、数学、英语、物理、化学、生物"
const newSubjects = ['语文', '数学', '英语', '物理', '化学', '生物'];

// 遍历数据，查找并替换"语文"
for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data[i].length; j++) {
    if (data[i][j] === '语文') {
      // 将"语文"单元格替换为"语文"
      // 并在后面的列中添加其他科目
      data[i][j] = '语文';
      // 在当前行后面添加其他科目
      for (let k = 1; k < newSubjects.length; k++) {
        data[i][j + k] = newSubjects[k];
      }
      console.log(
        `\n在第 ${i + 1} 行第 ${j + 1} 列找到"语文"，已替换为: ${newSubjects.join('、')}`
      );
    }
  }
}

console.log('\n修改后的数据:');
console.log(data);

// 3. 将修改后的数据写回 test.xlsx
const newWorksheet = XLSX.utils.aoa_to_sheet(data);
workbook.Sheets[sheetName] = newWorksheet;

XLSX.writeFile(workbook, filePath);

console.log('\n文件已成功更新!');
