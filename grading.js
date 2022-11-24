const points =
    [
        {
            id: 1,
            question: 'Create an object called profileData. Add four key pair values to the object: name, surname, age and city.(15 point)',
            grade: 15
        },
        {
            id: 2,
            question: 'Add a new property to the profileData object called details(15 Point)',
            grade: 15
        },
        {
            id: 3,
            question: 'Given an array of words, create a function named "wordConverter" which takes in two arguments: an array of strings and a string which will be added onto the end of array element. Look at [4] for an example. Important: Do not use a loop to complete this task..(20 Point)',
            grade: 20
        },
        {
            id: 4,
            question: 'Create a function called "calculateHours" which calculate how many hours (total) this person worked in the week based on the data structure below at [5]. Note: start is always morning time, end is always afternoon.(20 Point)',
            grade: 20
        },
        {
            id: 5,
            question: 'Create a class called Course to represent a course at DCI. The class should contain the type of the course, who the teacher is, and the number of students taking the course.(5 point)',
            grade: 5
        },
        {
            id: 6,
            question: 'The class should also have a method that checks how big a classroom should be depending on the number of students taking the course: 1 student = 2m².(5 point)',
            grade: 5
        },
        {
            id: 7,
            question: 'Print all the details of the course: "This is a year long web development course taught by John Smith. There are 10 students taking the course. The classroom should be 20m²" Please use the phrases found in the instructions above and just change the output depending on the teacher, course, number of students etc.(5 Point)',
            grade: 5
        },
        {
            id: 8,
            question: 'Create a function that returns true or false whethere a PIN is valid or not. Create a function named "validPin" that fulfills the requirements of the tests.(15 point)',
            grade: 14
        }
    ];

for (let i = 0; i < points.length; i++) {
    console.log(points[i].id, '-', points[i].question, ':', points[i].grade)
}

const result = points.reduce(function (acc, obj) { return acc + obj.grade; }, 0);
console.log('total:', result, 'points')