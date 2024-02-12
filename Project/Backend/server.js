const express = require('express');
const router = express.Router();
const mysqlConnection = require('./database');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.json());

app.use(cors());

// Get all clients
app.get('/clients', (req, res) => {
    mysqlConnection.query('SELECT * FROM Clients', (err, rows) => {
        if (!err) {
            res.json(rows);
        } else {
            console.error(err);
            res.status(500).send('Server Error');
        }
    });
});

// Create a new client
app.post('/clients', (req, res) => {
    const { name, email, phone, address } = req.body;
    mysqlConnection.query('INSERT INTO Clients (name, email, phone, address) VALUES (?, ?, ?, ?)', [name, email, phone, address], (err, result) => {
        if (!err) {
            res.status(201).json({message:'Client created successfully'});
        } else {
            console.error(err);
            res.status(500).send('Server Error');
        }
    });
});

// Update a client
app.put('/clients/:clientId', (req, res) => {
    console.log('update')
    const { name, email, phone, address } = req.body;
    const clientId = req.params.clientId;
    mysqlConnection.query('UPDATE Clients SET name=?, email=?, phone=?, address=? WHERE client_id=?', [name, email, phone, address, clientId], (err, result) => {
        if (!err) {
            res.json('Client updated successfully');
        } else {
            console.error(err);
            res.status(500).send('Server Error');
        }
    });
});

// Delete a client
app.delete('/clients/:clientId', (req, res) => {
    const clientId = req.params.clientId;
    mysqlConnection.query('DELETE FROM Clients WHERE client_id=?', [clientId], (err, result) => {
        if (!err) {
            res.json('Client deleted successfully');
        } else {
            console.error(err);
            res.status(500).send('Server Error');
        }
    });
});

//Meeting
// Get all meetings
app.get('/meetings', (req, res) => {
    mysqlConnection.query('SELECT Meetings.*, Clients.name AS client_name FROM Meetings INNER JOIN Clients ON Meetings.client_id = Clients.client_id', (err, rows) => {
        if (!err) {
            res.json(rows);
        } else {
            console.error(err);
            res.status(500).send('Server Error');
        }
    });
});

// Create a new meeting
app.post('/meetings', (req, res) => {
    const { client_id, date_time, agenda, location } = req.body;
    mysqlConnection.query('INSERT INTO Meetings (client_id, date_time, agenda, location) VALUES (?, ?, ?, ?)', [client_id, date_time, agenda, location], (err, result) => {
        if (!err) {
            res.status(201).json({ message: 'Meeting created successfully' });
        } else {
            console.error(err);
            res.status(500).send('Server Error');
        }
    });
});

// Update a meeting
app.put('/meetings/:meetingId', (req, res) => {
    const { agenda, location } = req.body;
    const meetingId = req.params.meetingId;
    // Extracting client_id and converting it to an integer
const client_id = parseInt(req.body.client_id);

// Convert date_time to the MySQL datetime format
const formattedDateTime = new Date(req.body.date_time).toISOString().slice(0, 19).replace('T', ' ');

// Set the converted date_time value
const date_time = formattedDateTime;
    mysqlConnection.query('UPDATE Meetings SET client_id=?, date_time=?, agenda=?, location=? WHERE meeting_id=?', [client_id, date_time, agenda, location, meetingId], (err, result) => {
        if (!err) {
            res.json('Meeting updated successfully');
        } else {
            console.error(err);
            res.status(500).send('Server Error');
        }
    });
});

// Delete a meeting
app.delete('/meetings/:meetingId', (req, res) => {
    const meetingId = req.params.meetingId;
    mysqlConnection.query('DELETE FROM Meetings WHERE meeting_id=?', [meetingId], (err, result) => {
        if (!err) {
            res.json('Meeting deleted successfully');
        } else {
            console.error(err);
            res.status(500).send('Server Error');
        }
    });
});


//projects
// Get all projects
app.get('/projects', (req, res) => {
    mysqlConnection.query('SELECT Projects.*, Clients.name AS client_name FROM Projects INNER JOIN Clients ON Projects.client_id = Clients.client_id', (err, rows) => {
        if (!err) {
            res.json(rows);
        } else {
            console.error(err);
            res.status(500).send('Server Error');
        }
    });
});

// Create a new project
app.post('/projects', (req, res) => {
    const { client_id, name, description, start_date, end_date, status } = req.body;
    mysqlConnection.query('INSERT INTO Projects (client_id, name, description, start_date, end_date, status) VALUES (?, ?, ?, ?, ?, ?)', [client_id, name, description, start_date, end_date, status], (err, result) => {
        if (!err) {
            res.status(201).json({ message: 'Project created successfully' });
        } else {
            console.error(err);
            res.status(500).send('Server Error');
        }
    });
});

// Update a project
app.put('/projects/:projectId', (req, res) => {
    const { name, description, status } = req.body;
    const projectId = req.params.projectId;
    // Extracting client_id and converting it to an integer
    const client_id = parseInt(req.body.client_id);

    // Convert date_time to the MySQL datetime format
const formattedDateTime = new Date(req.body.start_date).toISOString().slice(0, 19).replace('T', ' ');

// Set the converted date_time value
const start_date = formattedDateTime;

const formattedDateTime1 = new Date(req.body.end_date).toISOString().slice(0, 19).replace('T', ' ');

// Set the converted date_time value
const end_date = formattedDateTime1;


    
    mysqlConnection.query('UPDATE Projects SET client_id=?, name=?, description=?, start_date=?, end_date=?, status=? WHERE project_id=?', [client_id, name, description, start_date, end_date, status, projectId], (err, result) => {
        if (!err) {
            res.json('Project updated successfully');
        } else {
            console.error(err);
            res.status(500).send('Server Error');
        }
    });
});

// Delete a project
app.delete('/projects/:projectId', (req, res) => {
    const projectId = req.params.projectId;
    mysqlConnection.query('DELETE FROM Projects WHERE project_id=?', [projectId], (err, result) => {
        if (!err) {
            res.json('Project deleted successfully');
        } else {
            console.error(err);
            res.status(500).send('Server Error');
        }
    });
});

// Tasks
// Get all tasks
app.get('/tasks', (req, res) => {
    mysqlConnection.query('SELECT Tasks.*, Projects.name AS project_name FROM Tasks INNER JOIN Projects ON Tasks.project_id = Projects.project_id', (err, rows) => {
        if (!err) {
            res.json(rows);
        } else {
            console.error(err);
            res.status(500).send('Server Error');
        }
    });
});

// Create a new task
app.post('/tasks', (req, res) => {
    const { project_id, title, description, due_date, status } = req.body;
    mysqlConnection.query('INSERT INTO Tasks (project_id, title, description, due_date, status) VALUES (?, ?, ?, ?, ?)', [project_id, title, description, due_date, status], (err, result) => {
        if (!err) {
            res.status(201).json({ message: 'Task created successfully' });
        } else {
            console.error(err);
            res.status(500).send('Server Error');
        }
    });
});

// Update a task
app.put('/tasks/:taskId', (req, res) => {
    const { title, description, due_date, status } = req.body;
    const taskId = req.params.taskId;
    // Extracting project_id and converting it to an integer
    const project_id = parseInt(req.body.project_id);

    // Convert due_date to the MySQL date format
     const formattedDueDate = new Date(req.body.due_date).toISOString().slice(0, 10);

    // Set the converted due_date value
   
    
    mysqlConnection.query('UPDATE Tasks SET project_id=?, title=?, description=?, due_date=?, status=? WHERE task_id=?', [project_id, title, description, formattedDueDate, status, taskId], (err, result) => {
        if (!err) {
            res.json('Task updated successfully');
        } else {
            console.error(err);
            res.status(500).send('Server Error');
        }
    });
});

// Delete a task
app.delete('/tasks/:taskId', (req, res) => {
    const taskId = req.params.taskId;
    mysqlConnection.query('DELETE FROM Tasks WHERE task_id=?', [taskId], (err, result) => {
        if (!err) {
            res.json('Task deleted successfully');
        } else {
            console.error(err);
            res.status(500).send('Server Error');
        }
    });
});

// Start the server
const PORT = process.env.PORT || 3000; // Use the port specified in the environment variable PORT, or default to 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
