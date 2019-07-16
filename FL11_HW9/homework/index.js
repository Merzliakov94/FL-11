// Input data for task 8 and 9.
const info = [{
    '_id': '5b5e3168c6bf40f2c1235cd6',
    'index': 0,
    'birthday': '2016-03-18T00:00:00',
    'eyeColor': 'green',
    'name': 'Stein',
    'favoriteFruit': 'apple'
},
{
    '_id': '5b5e3168e328c0d72e4f27d8',
    'index': 1,
    'birthday': '1991-02-11T00:00:00',
    'eyeColor': 'blue',
    'name': 'Cortez',
    'favoriteFruit': 'strawberry'
},
{
    '_id': '5b5e3168cc79132b631c666a',
    'index': 2,
    'birthday': '1984-04-17T00:00:00',
    'eyeColor': 'blue',
    'name': 'Suzette',
    'favoriteFruit': 'apple'
},
{
    '_id': '5b5e31682093adcc6cd0dde5',
    'index': 3,
    'birthday': '1994-04-17T00:00:00',
    'eyeColor': 'green',
    'name': 'George',
    'favoriteFruit': 'banana'
}
];
// Task #1 findTypes()
function findTypes() {
    let types = new Set();
    let mass = {};
    for (let i = 0; i < arguments.length; i++) {
        types.add(typeof arguments[i]);
    }
    for (let i = 0; i < types.length; i++) {
        let count = 0;
        for (let j = 0; j < arguments.length; j++) {
            if (typeof arguments[j] === types[i]) {
                count++;
            } else {
            mass[types[i]] = count;
            }
        }
    }
    return mass;
}

// Task #2 executeforEach()
function executeforEach(arr, func){
    for(let i = 0; i < arr.length; i++){
        func(arr[i])
    }
}

// Task #3 mapArray()
function mapArray(arr, func) {
    let newArr = [];
    executeforEach(arr, function(item) {
        newArr.push(func(item));
    });
    return newArr;
}

// Task #4 filterArray()
function filterArray(arr, func){
    let newArr = [];
    executeforEach(arr, function (filter) {
        if(func(filter)) {
            newArr.push(filter)
        }
    });
    return newArr;
}

// Task #5 showFormattedDate()
function showFormattedDate(date) {
    let formattedDate = date.toLocaleString('en-us', { month: 'short', day: '2-digit' });
    return console.log('Date:'+formattedDate +date.getFullYear());
}

// Task #6 canConvertToDate()
function canConvertToDate(date) {
	return new Date(date).toString() !== 'Invalid Date';
}

// Task #7 daysBetween()
function daysBetween(firstDate, secondDate){
    let sec = 1000;
    let min = 3600;
    let h = 24;
    let days;
    days = Math.ceil(Math.abs(secondDate.getTime() - firstDate.getTime()) / (sec * min * h));
    return days;
  }  

// Task #8 getAmountOfAdultPeople() ^const info
function getAmountOfAdultPeople(info) {
    let count = 0;
    let adultAge = 18;
    let yearDays = 365;
    for (let i = 0; i < info.length; i++) {
        let days = daysBetween(new Date(info[i].birthday), new Date());
        let years = days / yearDays;
        if (years >= adultAge) {
            count++;
        }
    }
    return count;
}

// Task #9 keys()
function keys(obj) {
    let keysArr = [];
    for (let i in obj) {
      if (i) {
        keysArr.push(i);
      }
    }
    return keysArr;
  }
  
// Task #10 values()
  function values(obj) {
    let valArr = [];
    for (let i in obj) {
      if (i) {
        valArr.push(obj[i]);
      }
    }
    return valArr;
  }