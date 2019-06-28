// require express
var express = require('express')
// require path
var path = require('path')

var app = express()

// setting PORT
var PORT = 8080

app.use(express.urlencoded({extended : true}))
app.use(express.json())

// Sample Hard Coded Data
// =====================================

var tables = [
    {
        tableNumber: '1',
        tableName: 'Test',
        tablePhone: '555-555-5555',
        tableEmail: 'example@example.com'
    },{
        tableNumber: '2',
        tableName: 'Test2',
        tablePhone: '555-555-5551',
        tableEmail: 'example@example.com2'
    },{
        tableNumber: '2',
        tableName: 'Test2',
        tablePhone: '555-555-5551',
        tableEmail: 'example@example.com2'
    },{
        tableNumber: '2',
        tableName: 'Test2',
        tablePhone: '555-555-5551',
        tableEmail: 'example@example.com2'
    },{
        tableNumber: '2',
        tableName: 'Test2',
        tablePhone: '555-555-5551',
        tableEmail: 'example@example.com2'
    },{
        tableNumber: 'WaitingList Item',
        tableName: 'New Name',
        tablePhone: '555-555-5551',
        tableEmail: 'example@Waiting-List.com2'
    }
]

//  ROUTING
// =====================================
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'view.html'))
})

app.get('/add', (req, res) => {
    res.sendFile(path.join(__dirname, 'add.html'))
})

app.get('/all', (req, res) => {
    res.sendFile(path.join(__dirname, 'all.html'))
})

app.get('/api/tables', (req, res) => {
    return res.json(tables)
})

// Add a New Table
// ======================================

app.post('api/tables', (req, res) => {
    var newTable = req.body

    newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();

    console.log(newTable)

    tables.push(newTable)

    res.json(newTable)
})

// Starting Severs 
// ======================================

app.listen(PORT, () => {
    console.log('Server Started on PORT: ')
    console.log('http://localhost:' + PORT)
})