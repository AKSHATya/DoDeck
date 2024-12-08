import pool from "../index.js";

export const addTask= async (req, res) => {
    const { title, description, category, deadline } = req.body;

    if (!title || !description || !category || !deadline) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const query = `
            INSERT INTO tasks (title, description, category, deadline)
            VALUES ($1, $2, $3, $4)
            RETURNING *;
        `;
        const values = [title, description, category, deadline];

        const result = await pool.query(query, values);
        res.status(201).json({ message: 'Task added successfully', task: result.rows[0] });
    } catch (error) {
        console.error('Error adding task:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const getTasks= async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM tasks ORDER BY created_at DESC');
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const updateTaskById= async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
        return res.status(400).json({ error: 'Status is required' });
    }

    try {
        const query = 'UPDATE tasks SET status = $1 WHERE id = $2 RETURNING *';
        const values = [status, id];

        const result = await pool.query(query, values);

        if (result.rowCount === 0) {
            return res.status(404).json({ error: 'Task not found' });
        }

        res.json({ message: 'Task status updated', task: result.rows[0] });
    } catch (error) {
        console.error('Error updating task status:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const getOtherTasks = async (req, res) => {
    try {
        const query = 'SELECT title, description, deadline FROM tasks WHERE category = $1';
        const values = ['Other']; 
        const result = await pool.query(query, values);
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


export const getPersonalTasks = async (req, res) => {
    
    try{
        const query = 'SELECT title, description, deadline FROM tasks WHERE category = $1';
        const values = ['Personal'];
        const result = await pool.query(query, values);
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const getWorkTasks = async (req, res) => {
    
    try{
        const query = 'SELECT title, description, deadline FROM tasks WHERE category = $1';
        const values = ['Work'];
        const result = await pool.query(query, values);
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


