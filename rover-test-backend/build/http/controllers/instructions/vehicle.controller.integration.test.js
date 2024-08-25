"use strict";
// import { HttpStatus } from '@nestjs/common';
// import { NestApplication } from '@nestjs/core';
// import { Test, TestingModule } from '@nestjs/testing';
// import { applySettings } from '../../module/app.module';
// import * as request from 'supertest';
// import { VehicleController } from './instructions.controller';
// describe('admin module integration tests', () => {
//     let app: NestApplication;
//     beforeAll(async () => {
//       const module: TestingModule = await Test.createTestingModule({
//         imports: [],
//         controllers: [VehicleController],
//       }).compile();
//       app = module.createNestApplication();
//       app.registerParserMiddleware(); // this is necessary to parse the request bodies in middleware
//       applySettings(app);
//       await app.init();
//     });
//     afterAll(async () => {
//       await app.close();
//     });
//     describe('/vehicle/apr', () => {
//         it('should return aprRate', async () => {
//             const res = await request(app.getHttpServer())
//             .get(`/v1/vehicle/apr`)
//             .query({ 
//                 loanAmount: 10000, 
//                 loanTerm: 36,
//                 creditScore: 700,
//                 vehicleYear: 2014,
//                 vehicleMileage: 50000
//             })
//             expect(res.statusCode).toEqual(HttpStatus.OK);
//             expect(res.body).toEqual({ aprRate: '5.75%' });
//         });
//         it('should return 412 when FailedPreconditionError is throw', async () => {
//             const res = await request(app.getHttpServer())
//             .get(`/v1/vehicle/apr`)
//             .query({ 
//                 loanAmount: 10000, 
//                 loanTerm: 12,
//                 creditScore: 700,
//                 vehicleYear: 2014,
//                 vehicleMileage: 50000
//             })
//             expect(res.statusCode).toEqual(HttpStatus.PRECONDITION_FAILED);
//             expect(res.body).toEqual({
//                 message: "Loan term should be greather than or equal 36 months",
//             })
//         });
//     })
// })
//# sourceMappingURL=vehicle.controller.integration.test.js.map