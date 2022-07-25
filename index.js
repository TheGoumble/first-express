//build express api
//1 install express

//2 import the express library
import  express, { request, response }  from 'express'

//3 initialize express server
const app = express()
app.use(express.json())

//add a new student (in theory)

app.post('/students', (request, response) => {
    const newStudent = request.body
    students.push(newStudent)
    response.status(201).send(students)
})

//4 list request that we want express to respond to 
app.get('/hello', (request, response) => {
    //Do something...
    response.send('Hello World 🌎!')
})

const students = [
    {firstName: 'Jonathan', lastName: 'Vegas'},
    {firstName: 'Bridgette', lastName: 'Lemus'},
    {firstName: 'Logan', lastName: 'McCalley'},
    {firstName: 'Mason', lastName: 'Madara'},
    {firstName: 'Sabastien', lastName: 'Placide'},
]

app.get('/students', (request, response) => {
    response.send(students)
})

app.get('/students/:fName', (request, response) => {
    const student = students.find(stud => stud.firstName === request.params.fName)
    // this is if student does not exist 
    if(!student){
        response.status(404).send({message: 'Student not found', success: false})
        return
    }
    response.send(student)
})



//5 listening on a port
app.listen(3001, () => {
    console.log('Now listening on port 3001')
})