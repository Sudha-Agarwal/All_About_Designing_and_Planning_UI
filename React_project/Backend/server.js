const connection = require('./database.js');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(cors());

//get all movies
app.get('/movies',(req,res) => {
    connection.query('SELECT movies.*, genres.name AS genre_name from movies INNER JOIN genres ON movies.genre_id = genres.genre_id',(err,rows) =>{
        if(!err){
            res.json(rows);
        }
        else{
            console.log(err);
            res.status(500).send('Server error')
        }
    });
});

//get movie by title
app.get('/movies/search/title',(req,res) => {
    const title = req.query.title;
    const query = 'SELECT movies.*, genres.name AS genre_name from movies INNER JOIN genres ON movies.genre_id = genres.genre_id WHERE title = ?';

    connection.query(query,[title],(err,rows) => {
        if(!err){
            if(rows.length > 0){
                res.json(rows);
            }
            else{
                res.status(404).send('Movie Not Found')
            }
        }
        else{
            res.status(500).send('Server Error')
        }
    })
});

app.post('/signup',(req,res)=>{
    const {username, password, name} = req.body;

    const query = 'INSERT INTO app_user(username, password, name) VALUES(?,?,?)';

    connection.query(query,[username,password,name], (err,result) => {
        if(err){
            res.status(500).json({success:false, message:'Internal server error'});
            return;
        }
        console.log('successful');
        res.json({sucess:true,message:'User Registered successfully'})

    })
});

app.post('/login', (req,res) => {
    const{username,password} = req.body;
    const query = 'SELECT * FROM app_user WHERE username= ? and password=?';
    connection.query(query,[username,password],(err,result) => {
        if(err){
            res.status(500).json({success:false, message:'Internal server error'});
            return;
        }
        else if(result.length > 0){
            const user = result[0];
            res.json({
                success:true,
                user:{
                    id:user.id,
                    username: user.username,
                    name:user.name
                }
            })

        }
        else{
            res.status(401).json({success:false,message:'Invalid username or password'})
        }
    })
})

app.listen(3000, ()=>{
    console.log('server is running');
});

