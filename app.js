import Hapi from '@hapi/hapi';
import env from './utils/env.js';
import chalk from 'chalk';
import bookRoute from './routes/bookRoute.js';

const port = env.API_PORT || 3000;

const init = async () => {
    const server = Hapi.Server({
        host: env.API_HOST,
        port,
        routes: {
            cors: {
              origin: ['*'],
            },
        },
    });

    server.route(bookRoute);

    await server.start();
    console.log(`${env.API_NAME} Listening At\n\n ${chalk.white.bold('Local:')} ${chalk.green(`http://${env.API_HOST}:${port}`)}`)
}

init();