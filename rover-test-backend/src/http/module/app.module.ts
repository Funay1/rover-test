import {
    INestApplication, Module, ValidationPipe, VersioningType,
} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { InstructionsController } from '../controllers/instructions/instructions.controller';
import { ErrorsInterceptor } from '../interceptors/http-error.interceptors';

let server: INestApplication;

@Module({
imports: [
],
controllers: [
    InstructionsController
],
})
  
class AppModule {
}
  
export async function startHttpServer(port = 3000) {
    server = await NestFactory.create(AppModule);

    applySettings(server);

    const config = new DocumentBuilder()
    .setTitle('Rover instruction API')
    .setDescription('This API should return all Rover instruction calculation.')
    .setVersion('1.0')
    .addTag('Rover')
    .build();
    const document = SwaggerModule.createDocument(server, config);
    SwaggerModule.setup('docs', server, document);
    await server.listen(port);
    console.log(`HTTP server started and listening on port ${port}`);
    }

    export function applySettings(app: INestApplication): void {
    app.enableCors();
    app.use(helmet());
    app.enableShutdownHooks();
    app.enableVersioning({
        type: VersioningType.URI,
        defaultVersion: ['1'],
        prefix: 'v',
    });
    app.useGlobalPipes(new ValidationPipe({transform: true}))
    app.useGlobalInterceptors(new ErrorsInterceptor());
}