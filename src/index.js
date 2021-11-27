import "./config";
import app from './app';
import "./database";
import {PORT} from "./config";
//start on server
app.listen(PORT);
console.log(`server on port http://localhost:${PORT}`, PORT);
