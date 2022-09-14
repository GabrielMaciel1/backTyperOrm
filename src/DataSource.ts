
import {Columns} from './entities/Column'
import { Card } from './entities/Card';
import 'reflect-metadata'
import { DataSource } from 'typeorm'


const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "postgres",
    //synchronize: true,
    entities: [Card, Columns],
    migrations: ['**/migrations/*{.ts,.js}'],
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

export default AppDataSource;