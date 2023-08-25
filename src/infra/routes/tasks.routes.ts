import TaskController from '../../app/controllers/TaskController';
import { Router } from 'express';

const router = Router();

router.get('/tasks', TaskController.get);
router.get('/:id', TaskController.getid);
router.post('/tasks', TaskController.post);
router.patch('/tasks/:id', TaskController.update);
router.delete('/tasks/:id', TaskController.delete);

export default router;
