export default function getListStudents() {
  const list = [];

  const students = [
    { id: 1, firstname: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstname: 'James', location: 'Columbia' },
    { id: 5, firstname: 'Serena', location: 'San Francisco' },
  ];

  list.push(students);
  return (list);
}
