const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
// Enable CORS for all routes (adjust the options as needed for your environment)
app.use(cors());
app.use(bodyParser.json()); // Parse JSON request bodies
const port = 3000; // You can change this to any port you prefer

const products = [
    { id: 1, name: 'Product 1', description: 'Description 1' ,category:"mobile"},
    { id: 2, name: 'Product 2', description: 'Description 2' ,category:"mobile"},
    { id: 3, name: 'Product 3', description: 'Description 3' ,category:"laptop"},
    { id: 4, name: 'Product 4', description: 'Description 3',category: 'furniture' },
    { id: 4, name: 'Product 1', description: 'Description 1' ,category:"mobile"},
    { id: 6, name: 'Product 2', description: 'Description 2' ,category:"mobile"},
    { id: 7, name: 'Product 3', description: 'Description 3' ,category:"laptop"},
    { id: 8, name: 'Product 4', description: 'Description 3',category: 'furniture' },
    { id: 9, name: 'Product 1', description: 'Description 1' ,category:"laptop"},
    { id: 10, name: 'Product 2', description: 'Description 2' ,category:"laptop"},
    { id: 11, name: 'Product 3', description: 'Description 3' ,category:"laptop"},
    { id: 12, name: 'Product 4', description: 'Description 3',category: 'laptop' },
    { id: 13, name: 'Product 1', description: 'Description 1' ,category:"laptop"},
    { id: 14, name: 'Product 2', description: 'Description 2' ,category:"laptop"},
    { id: 15, name: 'Product 3', description: 'Description 3' ,category:"laptop"},
    { id: 16, name: 'Product 4', description: 'Description 3',category: 'laptop' },
    { id: 17, name: 'Product 4', description: 'Description 3',category: 'laptop' },
  ];
//REST API
app.get("/products",(req,res) => {
    console.log("Request received");
    res.status(200).json(products);
});

app.post("/login",(req,res) => {
    console.log("Request received");
    console.log(req.body);
    res.status(200).json({message:'Login successful'});
})


// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });