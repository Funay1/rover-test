"use strict";
// import { CreditScoreRange, LoanTermRange } from './types';
// import * as helpers from './utils/helper';
// import { VehicleService, vehicleService } from './instructions.service';
// describe('Vehicle Service', ()=>{
//     describe('validateLoanAmount', ()=>{
//         it('Should pass', ()=>{
//             expect(()=>vehicleService.validateLoanAmount({ creditScoreRange: CreditScoreRange.GOOD, loanAmount: 10000, loanTermRange: LoanTermRange.UP_TO_36_MONTHS })).not.toThrow();
//         });
//         it.each([
//             [LoanTermRange.UP_TO_36_MONTHS, 4000, 5000],
//             [LoanTermRange.UP_TO_48_MONTHS, 8000, 10000],
//             [LoanTermRange.UP_TO_60_MONTHS, 13000, 15000],
//         ])('Should throw when loanTerm is %s and loanAmount=%s (less than %s)', (loanTermRange, loanAmount)=>{
//             expect(()=>vehicleService.validateLoanAmount({ creditScoreRange: CreditScoreRange.GOOD, loanAmount, loanTermRange })).toThrow();
//         });
//         it.each([
//             [CreditScoreRange.GOOD, 120000, 100000],
//             [CreditScoreRange.FAIR, 76000, 75000],
//             [CreditScoreRange.POOR, 55000, 50000],
//         ])('Should throw when creditScore is %s and loanAmount=%s (greater than %s)', (creditScoreRange, loanAmount)=>{
//             expect(()=>vehicleService.validateLoanAmount({ creditScoreRange, loanAmount, loanTermRange: LoanTermRange.UP_TO_36_MONTHS })).toThrow();
//         });
//         it.each([
//             [CreditScoreRange.GOOD, 120000, 100000],
//             [CreditScoreRange.FAIR, 76000, 75000],
//             [CreditScoreRange.POOR, 55000, 50000],
//         ])('Should pass when creditScore is %s and loanAmount=%s (greater than %s)', (creditScoreRange, loanAmount)=>{
//             expect(()=>vehicleService.validateLoanAmount({ creditScoreRange, loanAmount, loanTermRange: LoanTermRange.UP_TO_36_MONTHS })).toThrow();
//         });
//     });
//     describe('getAprPercentage', ()=>{
//         const MOCK_PERCENTAGE = 5;
//         it('Should return getAprPercentage helper result', () => {
//             const spyGetAprPercentage = jest.spyOn(helpers, 'getAprPercentage').mockReturnValueOnce(MOCK_PERCENTAGE);
//             const result = vehicleService.getAprPercentage({ creditScoreRange: CreditScoreRange.GOOD, loanTermRange: LoanTermRange.UP_TO_48_MONTHS, vehicleMileage: 100000, vehicleYear: 2015 });
//             expect(result).toEqual(MOCK_PERCENTAGE);
//             expect(spyGetAprPercentage).toHaveBeenCalledWith(CreditScoreRange.GOOD, LoanTermRange.UP_TO_48_MONTHS);
//         })
//         it('Should increase 2% in APR when vehicleMileage is over than 100.000', () => {
//             const spyGetAprPercentage = jest.spyOn(helpers, 'getAprPercentage').mockReturnValueOnce(5);
//             const result = vehicleService.getAprPercentage({ creditScoreRange: CreditScoreRange.GOOD, loanTermRange: LoanTermRange.UP_TO_48_MONTHS, vehicleMileage: 100001, vehicleYear: 2015 })
//             expect(result).toEqual(MOCK_PERCENTAGE + 2);
//             expect(spyGetAprPercentage).toHaveBeenCalledWith(CreditScoreRange.GOOD, LoanTermRange.UP_TO_48_MONTHS);
//         });
//         it('Should increase 1% in APR when vehicleYear is before 2015', () => {
//             const spyGetAprPercentage = jest.spyOn(helpers, 'getAprPercentage').mockReturnValueOnce(5);
//             const result = vehicleService.getAprPercentage({ creditScoreRange: CreditScoreRange.GOOD, loanTermRange: LoanTermRange.UP_TO_48_MONTHS, vehicleMileage: 100000, vehicleYear: 2014 })
//             expect(result).toEqual(MOCK_PERCENTAGE + 1);
//             expect(spyGetAprPercentage).toHaveBeenCalledWith(CreditScoreRange.GOOD, LoanTermRange.UP_TO_48_MONTHS);
//         });
//         it('Should increase 3% in APR when vehicleYear is before 2015 and vehicleMileage is over than 100.000', () => {
//             const spyGetAprPercentage = jest.spyOn(helpers, 'getAprPercentage').mockReturnValueOnce(5);
//             const result = vehicleService.getAprPercentage({ creditScoreRange: CreditScoreRange.GOOD, loanTermRange: LoanTermRange.UP_TO_48_MONTHS, vehicleMileage: 100001, vehicleYear: 2014 })
//             expect(result).toEqual(MOCK_PERCENTAGE + 3);
//             expect(spyGetAprPercentage).toHaveBeenCalledWith(CreditScoreRange.GOOD, LoanTermRange.UP_TO_48_MONTHS);
//         });
//         it('Should throw when spyGetAprPercentage returns null', () => {
//             const spyGetAprPercentage = jest.spyOn(helpers, 'getAprPercentage').mockReturnValueOnce(null);
//             expect(()=>vehicleService.getAprPercentage({ creditScoreRange: CreditScoreRange.GOOD, loanTermRange: LoanTermRange.UP_TO_48_MONTHS, vehicleMileage: 100001, vehicleYear: 2014 })).toThrow();
//             expect(spyGetAprPercentage).toHaveBeenCalledWith(CreditScoreRange.GOOD, LoanTermRange.UP_TO_48_MONTHS);
//         })
//     });
//     describe('getCreditScoreRange', () => {
//         it.each([
//             [700, CreditScoreRange.GOOD],
//             [699, CreditScoreRange.FAIR],
//             [600, CreditScoreRange.FAIR],
//             [599, CreditScoreRange.POOR],
//             [0, CreditScoreRange.POOR],
//         ])('When creditScore = %s, should return creditScoreRange = %s', (creditScore, creditScoreRange)=>{
//             const result = vehicleService['getCreditScoreRange'](creditScore);
//             expect(result).toEqual(creditScoreRange);
//         })
//     })
//     describe('getLoanTermRange', () => {
//         it.each([
//             [36, LoanTermRange.UP_TO_36_MONTHS],
//             [47, LoanTermRange.UP_TO_36_MONTHS],
//             [48, LoanTermRange.UP_TO_48_MONTHS],
//             [59, LoanTermRange.UP_TO_48_MONTHS],
//             [60, LoanTermRange.UP_TO_60_MONTHS],
//         ])('When loanTerm = %s, should return LoanTermRange = %s', (loanTerm, loanTermRange)=>{
//             const result = vehicleService['getLoanTermRange'](loanTerm);
//             expect(result).toEqual(loanTermRange);
//         })
//     })
//     describe('calculateAPR', () => {
//         it('should get APR', () => {
//             const spyGetCreditScoreRange = jest.spyOn(VehicleService.prototype as any, 'getCreditScoreRange');
//             const spyGetLoanTermRange = jest.spyOn(VehicleService.prototype as any, 'getLoanTermRange');
//             const spyValidateLoanAmount = jest.spyOn(VehicleService.prototype, 'validateLoanAmount');
//             const spyGetAprPercentage = jest.spyOn(VehicleService.prototype, 'getAprPercentage');
//             const result = vehicleService.calculateAPR({creditScore: 700, loanAmount: 10000, loanTerm: 36, vehicleMileage: 50000, vehicleYear: 2014 })
//             expect(result).toEqual(5.75);
//             expect(spyGetCreditScoreRange).toHaveBeenCalledWith(700)
//             expect(spyGetLoanTermRange).toHaveBeenCalledWith(36)
//             expect(spyValidateLoanAmount).toHaveBeenCalledWith({ creditScoreRange: CreditScoreRange.GOOD, loanTermRange: LoanTermRange.UP_TO_36_MONTHS, loanAmount: 10000 })
//             expect(spyGetAprPercentage).toHaveBeenCalledWith({ creditScoreRange: CreditScoreRange.GOOD, loanTermRange: LoanTermRange.UP_TO_36_MONTHS, vehicleMileage: 50000, vehicleYear: 2014 })
//         })
//     })
// })
//# sourceMappingURL=vehicle.service.unit.test.js.map