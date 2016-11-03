var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

// sort above array by name
// if name is the same, sort by age

var sorted = students.sort(function(a,b) {
  if (a.name === b.name)
    return a.age - b.age;
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
});

console.log(sorted);