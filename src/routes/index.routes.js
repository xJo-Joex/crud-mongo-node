import { Router } from "express";
import {
  getTasks,
  postCreateTask,
  getEditTask,
  postUpdateTask,
  getDeleteTask,
  getToogleDone,
} from "../controller/task.controller";
const router = Router();

router.get("/", getTasks);
router.post("/task/add", postCreateTask);

router.get("/edit/task/:idTask", getEditTask);
router.post("/edit/task/:idTask", postUpdateTask);

router.get("/delete/task/:idTask", getDeleteTask);

router.get("/toogleDone/:idTask", getToogleDone);

export default router;
