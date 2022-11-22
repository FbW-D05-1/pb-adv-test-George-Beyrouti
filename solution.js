/// Task 1.

console.log("===== Task 1 =====");

const profileData = {
  firstName: "George",
  lastName: "Beyrouti",
  age : "30",
  city: "Dortmund"
}


console.log(profileData);

/// Task 2.

console.log("===== Task 2 =====");


profileData.details = () => {return ` ${profileData.firstName} ${profileData.lastName} is ${profileData.age} years old and lives in  ${profileData.city} `
}


console.log(profileData.details());


/// Task 3.

console.log("===== Task 3 =====");

const wordConverter = (words, suffix) => {
  return words.map(word => ` ${word}${suffix} `
  )

}



let adjectives = ["smart", "kind", "sweet", "small", "clear"];

console.log(wordConverter(adjectives, "er"))


/// Task 4.

console.log("===== Task 4 =====");



  const hourTracking = [
        { day: 'Monday', start: 8, end: 17},
        { day: 'Tuesday', start: 9, end: 15},
        { day: 'Wednesday', start: 10, end: 18},
        { day: 'Thursday', start: 7, end: 14},
        { day: 'Friday', start: 6, end: 12},
    ];


const calculateHours = (hours) => {
  let totalEnd = hours.reduce((acc, curr ) => {
    acc += curr.end;

    return acc;

  },0)

    let totalStart = hours.reduce((acc, curr ) => {
    acc += curr.start;

    return acc;

  },0)

  return totalEnd - totalStart


}


console.log(calculateHours(hourTracking));



/// Task 5.

console.log("===== Task 5 =====");


class Course {
  constructor(teacher, type, number) {
    this.teacher = teacher;
    this.type = type;
    this.number = number;

  }
  spaceNeeded = () => { return ` ${2 * this.number} m²;` }

  details = () => {return  `"This is a ${this.type} course taught by ${this.teacher} . There are ${this.number}  students taking the course."` }
}


const FbW0522 = new Course("John Smith", "web development", 22)

console.log(FbW0522);

console.log(FbW0522.spaceNeeded());

console.log(FbW0522.details());


/// Task 6.

console.log("===== Task 6 =====");

const validPin = (PIN) => {

  let splittedPin = PIN.split("");

  
  splittedPin.every(element => { if (typeof element !== " number ") { console.log("false should only consist of numbers")}
  }) 
    
  if (splittedPin.length !== 4 ) { console.log("false should be 4 digits");  }

  else if (splittedPin[splittedPin.length -1] % 2 !== 0)  { console.log("false last number should be even"); }

  else if (splittedPin[splittedPin.length -1] === splittedPin[0])  {  console.log("false first and last digit should be different than first digit") ; }  



  else console.log("true");


  
}

validPin("1234");

validPin("1235");

validPin("12ww");

validPin("12.4");

validPin("-234");

validPin("12345");

validPin("2222");

validPin("2224");