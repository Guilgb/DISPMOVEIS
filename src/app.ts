import express from 'express';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';

import './infra/database/Mongo';
import routes from './infra/routes/index.router';

class App {
    public server: express.Application;

    public constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }

    public init(): express.Application {
        return this.server;
    }

    private middlewares(): void {
        this.server.use(express.json({}));
        this.server.use(
            express.urlencoded({
                extended: true,
            })
        );
    }

    private routes(): void {
        this.server.use(...routes);
    }
}

export default App;
