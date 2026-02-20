import express from 'express';
import { addTodoController, handleDeleteTodoController, handleEditTodoController, handleTodoListFetchController } from '../controller/todoController.js';

const router = express.Router()

router.post("/addTodo" , addTodoController);
router.get("/todoList" , handleTodoListFetchController);
router.delete("/deleteTodo/:id" , handleDeleteTodoController);
router.put("/editTodo/:id" , handleEditTodoController);

export default router;

