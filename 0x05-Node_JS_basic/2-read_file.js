const fs = require('fs');

function countStudents(path) {
  try {
    const csvData = fs.readFileSync(path, 'utf8');
    const rows = csvData.split('\n');
    rows.splice(-1);
    console.log(`Number of students: ${rows.length - 1}`);
    const data = {};
    const head = rows[0].split(',');
    head.map((item) => {
      data[item] = [];
    });
    rows.splice(0, 1);
    rows.map((item) => {
      let student = item.split(',');
      for (let i = 0; i < student.length; i++) {
        data[head[i]].push(student[i]);
      }
    });
    const countField = {};
    data.field.map((item) => {
      if (countField.hasOwnProperty(item)) {
        countField[item] += 1;
      } else {
        countField[item] = 1;
      }
    });
    Object.keys(countField).forEach((key) => {
      names = 'List: ';
      for (let i = 0; i < data.field.length; i++) {
        if (data.field[i] === key) {
          if (names.length > 7) {
            names += ', ';
          }
          names += data.firstname[i];
        }
      }
      console.log(`Number of students in ${key}: ${countField[key]}. ${names}`);
    });
  } catch {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
