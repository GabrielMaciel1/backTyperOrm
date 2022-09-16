import "reflect-metadata"
import routes from '../src/routes/routes'
import cors from 'cors'
import express from "express"


	const app = express()

	app.use(express.json())
	app.use(cors());

	app.use(routes)
    const port = process.env.PORT || 8080;
    app.listen(port, () => console.log(`listening on port ${port}...`));


	
	




