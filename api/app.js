// for the .env file
require('dotenv').config()
const express = require('express')
const app = express()
const rateLimiter = require('express-rate-limit')
// to connect my DB
const connectDB = require('./db/connect')

//  routers
const authRouter = require('./routes/authRoutes');

// to handle error
const notFound = require('./middleware/notFound')

//package to upload file
const fileUpload = require('express-fileupload')

//MIDDLEWARE
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));

app.use(express.static("./public"));
app.use(fileUpload());

// ROUTER PART
app.use("/api/v1/auth", authRouter);

app.use(notFound)

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
