//build express api
//1 install express

//2 import the express library
import  express  from 'express'

//3 initialize express server
const app = express()



//4 list request that we want express to respond to 
app.get('/hello', (request, response) => {
    //Do something...
    response.send('Hello World 🌎!')
})




//5 listening on a port
app.listen(3001, () => {
    console.log('Now listening on port 3001')
})