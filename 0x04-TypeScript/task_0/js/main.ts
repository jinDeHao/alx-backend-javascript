interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const firstStudent: Student = {
  firstName: 'l3arbi',
  lastName: 'ojamaa',
  age: 62,
  location: 'iggi o3fir',
};
const secondStudent: Student = {
  firstName: 'da moh',
  lastName: 'obrayka',
  age: 57,
  location: 'agmmadan',
};

const studentsList: Array<Student> = [firstStudent, secondStudent];

const table: HTMLTableElement = document.createElement('table');
studentsList.map((item) => {
  const row: HTMLTableRowElement = table.insertRow();
  const cell1: HTMLTableCellElement = row.insertCell();
  const cell2: HTMLTableCellElement = row.insertCell();
  cell1.innerText = item.firstName;
  cell2.innerText = item.location;
});
document.body.appendChild(table);
