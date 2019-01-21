const employers = [
  "Alex",
  "",
  "ludmila",
  "Viktor",
  "",
  "oleg",
  "iNna",
  "Ivan",
  "Alex",
  "Olga",
  " Ann"
];

var employersNames = employers.filter(name => {
  return name.length > 0;
});

employersNames = employersNames.map(name => {
  return name.toLowerCase().trim();
});

export { employersNames };
