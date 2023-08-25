import { TaskResponse } from 'app/interfaces/ITask';
import TaskRepository from '../repository/TaskRepository';

class TaskService {
    async get(payload) {
        const task = await TaskRepository.get();
        return task;
    }
    async getid(id: string, data: TaskResponse){
        const result = await TaskRepository.findTaskById(id);
        return result;
    }

    async post(req: TaskResponse){
        const result = await TaskRepository.post(req);
        return result;
    }

    async update(id: string, data: TaskResponse){
        const result = await TaskRepository.update(id, data);
        return result;
    }

    async delete(id: string){
        const result = await TaskRepository.delete(id);
        return result;
    }
}

export default new TaskService();
