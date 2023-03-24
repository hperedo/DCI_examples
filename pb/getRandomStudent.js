const studentsArray = [
  'Agi',
  'Sarina',
  'Rodrigo',
  'Janos',
  'Emmanuel',
  'Rana',
  'Vijaya',
  'David',
  'Diouani',
  'Alveena',
  'Francis',
  'Humberto',
  'Yazan',
  'Anas',
  'Teng',
  'Mohammad',
];

function getRandomStudent(studentsArray) {
  const students = [...studentsArray];
  const randomIndex = Math.floor(Math.random() * students.length);
  return students[randomIndex];
}

const randomStudent = getRandomStudent(studentsArray);
console.log(randomStudent);
