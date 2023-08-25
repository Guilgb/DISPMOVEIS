import App from './app';
import Database from './infra/database/Mongo';

const app = new App();

app.init().listen(5000, () => {
    const data = Database;
    data.connect();
    console.info('app rodando na porta http://localhost:5000');
});
