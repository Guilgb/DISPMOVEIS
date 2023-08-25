import type { PaginateModel } from 'mongoose';
import { Schema, model } from 'mongoose';
import paginate from 'mongoose-paginate-v2';
import uniqueValidator from 'mongoose-unique-validator';

import type { TaskResponse } from '../interfaces/ITask';

const schema = new Schema<TaskResponse>(
    {
        text: { type: String, required: true },
        completed: { type: Boolean, required: true },
    },
    { versionKey: false }
);

schema.plugin(paginate);
schema.plugin(uniqueValidator);

const Tutor = model<TaskResponse, PaginateModel<TaskResponse>>(
    'Task',
    schema,
    'Tasks'
);
export default Tutor;
