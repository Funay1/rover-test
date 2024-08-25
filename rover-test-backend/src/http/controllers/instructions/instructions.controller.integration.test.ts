import { HttpStatus } from '@nestjs/common';
import { NestApplication } from '@nestjs/core';
import { Test, TestingModule } from '@nestjs/testing';
import { applySettings } from '../../module/app.module';
import request from 'supertest';
import { InstructionsController } from './instructions.controller';
import { MovimentModel } from '../../../models/moviment.model';

describe('admin module integration tests', () => {
    let app: NestApplication;
  
    beforeAll(async () => {
      jest.spyOn(MovimentModel, 'create').mockResolvedValue('');
      const module: TestingModule = await Test.createTestingModule({
        imports: [],
        controllers: [InstructionsController],
      }).compile();
  
      app = module.createNestApplication();
      app.registerParserMiddleware(); // this is necessary to parse the request bodies in middleware
      applySettings(app);
  
      await app.init();
    });
  
    afterAll(async () => {
      await app.close();
    });
  
    describe('/', () => {
        it('should final position', async () => {
            const res = await request(app.getHttpServer())
            .post(`/v1/instructions`)
            .send({
                "initialPosition": {
                  "x": 1,
                  "y": 2,
                  "direction": "N"
                },
                "instructions": "LMLMLMLMM"
              })

            expect(res.statusCode).toEqual(HttpStatus.OK);
            expect(res.body).toEqual({x: 1, y: 3, direction: 'N'});
        });
        it('should return 412 when FailedPreconditionError is throw', async () => {
            const res = await request(app.getHttpServer())
            .post(`/v1/instructions`)
            .send({ 
                "initialPosition": {
                    "x": 1,
                    "y": 2,
                    "direction": "N"
                  },
                  "instructions": "INVALID INSTRUCTION"
            })

            expect(res.statusCode).toEqual(HttpStatus.PRECONDITION_FAILED);
            expect(res.body).toEqual({
                message: "Invalid instruction format",
            })
        });
    })
})