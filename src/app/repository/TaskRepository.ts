import { TaskResponse } from 'app/interfaces/ITask';
import TaskModel from '../model/TaskModel';

class TaskRepository {
    async get() {
        const result = await TaskModel.find();
        return result;
    }

    async findTaskById(id: string): Promise<TaskResponse | null> {
        return await TaskModel.findById(id).select('_id').lean();
    }

    async post(req: TaskResponse) {
        return await TaskModel.create(req);
    }

    async delete(id: string) {
        return await TaskModel.findByIdAndDelete(id);
    }

    async update(id: string, data: TaskResponse) {
        return await TaskModel.findByIdAndUpdate(id, data);
    }
}

export default new TaskRepository();
