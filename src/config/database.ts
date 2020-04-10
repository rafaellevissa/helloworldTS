import "reflect-metadata";
import {createConnection} from "typeorm";
import Person from "../person/Person"
createConnection({
    type: "postgres",
    host: "localhost",
    port: 3306,
    username: "postgres",
    password: "postgres",
    database: "test",
    entities: [
      Person
    ],
    synchronize: true,
    logging: false
}).then(connection => {
    // here you can start to work with your entities
}).catch(error => console.log(error));