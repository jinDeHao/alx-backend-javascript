const fs = require('fs');

function countStudents(path) {
  try {
    const csvData = fs.readFileSync(path, 'utf8');
    const lines = csvData.split('\n');
    rows = lines.filter((item) => item.trim() !== '');
    console.log(`Number of students: ${rows.length - 1}`);
    const data = [];
    const head = [...rows[0].split(',')];
    rows.splice(0, 1);
    for (let i = 0; i < rows.length; i++) {
      let student = {};
      let j = 0;
      head.map((item) => {
        student[item] = rows[i].split(',')[j];
        j++;
      });
      data.push(student);
    }
    const countField = {};
    data.map((item) => {
      if (countField.hasOwnProperty(item.field)) {
        countField[item.field] += 1;
      } else {
        countField[item.field] = 1;
      }
    });
    Object.keys(countField).forEach((key) => {
      names = 'List: ';
      names += data
        .filter((item) => item.field === key)
        .map((item) => item.firstname)
        .join(', ');
      console.log(`Number of students in ${key}: ${countField[key]}. ${names}`);
    });
  } catch {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
