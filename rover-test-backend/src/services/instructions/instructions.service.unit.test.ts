import { MovimentModel } from '../../models/moviment.model';
import { instructionsService, InstructionsService } from './instructions.service';
import { Direction } from './types';


describe('Vehicle Service', ()=>{
    beforeAll(()=>{
        jest.spyOn(MovimentModel, 'create').mockResolvedValue('');
    })
    describe('validateLoanAmount', ()=>{
        it('Should pass', async ()=>{
            const result = await instructionsService.calculateFinalPosition({x: 1, y: 2, direction: Direction.N}, 'LMLMLMLMM');
            expect(result).toEqual({x: 1, y: 3, direction: 'N'});
        });

        it('Should pass', async ()=>{
            const spyInstruction = jest.spyOn(InstructionsService.prototype as any, 'runInstruction')
            const spyMove = jest.spyOn(InstructionsService.prototype as any, 'move')
            const spyRotate = jest.spyOn(InstructionsService.prototype as any, 'rotate')

            const instructions = 'MRRMMRMRRM';
            const result = await instructionsService.calculateFinalPosition({x: 3, y: 3, direction: Direction.E}, instructions);
            expect(spyInstruction).toHaveBeenCalledTimes(instructions.length);
            expect(spyMove).toHaveBeenCalledTimes(5)
            expect(spyRotate).toHaveBeenCalledTimes(5)
            expect(result).toEqual({x: 2, y: 3, direction: 'S'});
        });
    })})
