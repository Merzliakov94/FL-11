    
let ax = +prompt('A on axis X :', '');
let ay = +prompt('A on axis Y :', '');
let bx = +prompt('B on axis X :', '');
let by = +prompt('B on axis Y :', '');
let cx = +prompt('C on axis X :', '');
let cy = +prompt('C on axis Y :', '');
let half = 2;

let abx = (ax + bx) / half;
let aby = (ay + by) / half;

if (cx === abx && cy === aby) {
  console.log(true);
} else {
  console.log(false);
}