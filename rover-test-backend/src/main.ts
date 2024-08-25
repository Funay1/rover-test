import { startHttpServer } from './http/module/app.module';
import { init } from './loaders/sequelize';


(async ()=>{
    // console.log('env', process.env);
    await init()
    await startHttpServer(Number(process.env.PORT ?? 3000))
})()
