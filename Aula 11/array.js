const students = [
    {id: 1, name: 'John Doe', age: 23, scholarship: false},
    {id: 2, name: 'Margoe Rose', age: 19, scholarship: true},
    {id: 3, name: 'Kayle', age: 22, scholarship: true}
]
students.forEach((ele)=> {
    console.log(ele.name)
})
console.log("---------------")
students.forEach((ele)=>{
    if(ele.age>20){
        console.log(ele)
    }
})
console.log("------------")
let scholarshipT=[];
students.forEach((ele)=>{
    if(ele.scholarship){
        scholarshipT.push(ele)
    }
})
console.log(scholarshipT);