import TaskService from '../services/TaskService';
import type { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

class TaskController {
    async get(req: Request, res: Response) {
        try {
            const result = await TaskService.get(req.query);
            return res.status(StatusCodes.ACCEPTED).json(result);
        } catch (error) {
            if (!(error.statusCode === undefined)) {
                return res.status(error.statusCode).json({
                    message: error.name,
                    details: error.message,
                });
            }
            return res.status(500).json(error);
        }
    }

    async getid(req: Request, res: Response) {
        return 'nada';
    }

    async post(req: Request, res: Response) {
        try {
            const result = await TaskService.post(req.body);
            return res.status(StatusCodes.CREATED).json(result);
        } catch (error) {
            if (!(error.statusCode === undefined)) {
                return res.status(error.statusCode).json({
                    message: error.name,
                    details: error.message,
                });
            }

            return res.status(500).json(error);
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await TaskService.delete(id);
            return res.status(StatusCodes.NO_CONTENT).json();
        } catch (error) {
            if (!(error.statusCode === undefined)) {
                return res.status(error.statusCode).json({
                    message: error.name,
                    details: error.message,
                });
            }
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const data = req.body;
            const result = await TaskService.update(id, data);
            return res.status(StatusCodes.OK).json(result);
        } catch (error) {
            if (!(error.statusCode === undefined)) {
                return res.status(error.statusCode).json({
                    message: error.name,
                    details: error.message,
                });
            }

            return res.status(500).json(error);
        }
    }
}

export default new TaskController();
