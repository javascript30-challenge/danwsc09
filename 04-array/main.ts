// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

interface Person {
  first: string,
  last: string,
  year: number,
  passed: number
}

const inventors: Person[] = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
  'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
  'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const inventors1500s = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600)
console.log('born in 1500s:', inventors1500s)

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const firstAndLast = inventors.map(({first, last}) => ({first, last}))
console.log('first and last:', firstAndLast)

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sortByBirth = inventors.sort((i1, i2) => i1.year - i2.year)
console.log('sort by birth:', sortByBirth)

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const totalAge = inventors.reduce((total, curr) => total + (curr.passed - curr.year), 0)
console.log('total age:', totalAge)

// 5. Sort the inventors by years lived
const sortByYearsLived = inventors.sort((i1, i2) => (i1.passed - i1.year) - (i2.passed - i2.year))
console.log('sort by years lived:', sortByYearsLived)

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const allLinks = document.querySelector('.mw-category')?.querySelectorAll('a')
// const boulevardsWithDe = [...allLinks].filter(a => a.innerHTML.includes('de')).map(a => a.innerHTML)


// 7. sort Exercise
// Sort the people alphabetically by last name
const sorted = [...people].sort()
const alph = people.sort((p1, p2) => {
  const [p1Last, p1First] = p1.split(', ')
  const [p2Last, p2First] = p2.split(', ')
  return p1Last > p2Last ? 1 : -1
})
console.log('people sorted by lastname:', alph)

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

interface InstanceCount {
  [key: string]: number
}

const result: InstanceCount = {}
const instanceCount = data.reduce((prev, curr) => {
  if (curr in prev) {
    prev[curr] = prev[curr] + 1;
  } else {
    prev[curr] = 1;
  }
  return prev 
}, result)

console.log(instanceCount)