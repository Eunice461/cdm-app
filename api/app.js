// for the .env file
require('dotenv').config()

const express = require('express')
const app = express()

// to connect my DB
const connectDB = require('./db/connect')

// to handle error
const notFound = require('./middleware/notFound')

const port = process.env.PORT || 3000;

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(port, () =>
			console.log(`Server is listening on port ${port}...`)
		);
	} catch (error) {
		console.log(error);
	}
};

start();
