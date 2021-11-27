import taskModel from "../model/Task";

const getTasks = async (req, res) => {
  const tasks = await taskModel.find().lean();
  // console.log(tasks);
  res.render("index", { tasks: tasks });
};
const postCreateTask = async (req, res) => {
  const task = taskModel(req.body);
  await task.save();
  res.redirect("/");
};

const getEditTask = async (req, res) => {
  try {
    const idTask = req.params.idTask;
    const task = await taskModel.findById(idTask).lean();
    console.log({ ...task });
    res.render("edit", { ...task });
  } catch (error) {
    console.log(error);
    res.redirect(`/`);
  }
};

const postUpdateTask = async (req, res) => {
  try {
    const idTask = req.params.idTask;
    await taskModel.findByIdAndUpdate(idTask, req.body);
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
};

const getDeleteTask = async (req, res) => {
  try {
    const idTask = req.params.idTask;
    await taskModel.findByIdAndDelete(idTask);
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
};

const getToogleDone = async (req, res) => {
  try {
    const idTask = req.params.idTask;
    const task = await taskModel.findById(idTask);
    task.done = !task.done;
    await task.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
};
export {
  getTasks,
  postCreateTask,
  getEditTask,
  postUpdateTask,
  getDeleteTask,
  getToogleDone,
};
