//start app
import express from "express";
import indexRoutes from "./routes/index.routes";
// import {exphbs} from "express-handlebars";
import { engine } from "express-handlebars";
import path from "path";
import morgan from "morgan";

const app = express();

//Ubicación de la carptea views
app.set("views", path.join(__dirname, "views"));
//Engine template configuration
app.engine(
  ".hbs",
  engine({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout: "main",
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

//middlewares
//show type request in console
app.use(morgan("dev"));
//for decoding body
app.use(express.urlencoded({ extended: false }));

//allow access /public
app.use(express.static(path.join(__dirname, "public")))

//routes
app.use(indexRoutes);

export default app;
