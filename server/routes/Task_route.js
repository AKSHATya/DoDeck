import express from "express";
import { addTask,getOtherTasks,getPersonalTasks,getTasks,getWorkTasks,updateTaskById } from "../controllers/Task_controller.js";

const router = express.Router();

router.post('/addTask',addTask );

router.get('/tasks', getTasks);
router.get('/tasks/other', getOtherTasks);
router.get('/tasks/personal', getPersonalTasks);
router.get('/tasks/work', getWorkTasks);

router.patch('/tasks/:id', updateTaskById);

export default router;