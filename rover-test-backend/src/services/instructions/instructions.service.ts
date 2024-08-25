import { MovimentModel } from "../../models/moviment.model";
import { FailedPreconditionError } from "./errors/failed-precondition.error";
import { Direction, Instruction } from "./types";
import { positionsMapping } from "./utils/helper";



const LAND_LIMIT = 100;

interface Position {
    x: number, y: number, direction: Direction
}

export class InstructionsService {
    private rotate(currentPosition: Position, instruction: Instruction): Position{
          return {
            x: currentPosition.x,
            y: currentPosition.y,
            direction: positionsMapping[currentPosition.direction][instruction]
          } 
          
    }
    
    private validateInstructions(instructions: string) {
        const isInvalid = new RegExp(/[^(LRM)]/g).test(instructions); // check if any character is different than L, R or M
        if(isInvalid) throw new FailedPreconditionError('Invalid instruction format')
    }

    private runInstruction(currentPosition: Position, instruction: Instruction): Position {
        switch(instruction) {
            case Instruction.L:
            case Instruction.R:
                return this.rotate(currentPosition, instruction);
            case Instruction.M: 
                return this.move(currentPosition)
        }
    }
    private move(currentPosition: Position): Position{
        switch(currentPosition.direction) {
            case Direction.N: return this.moveNorth(currentPosition)
            case Direction.E: return this.moveEast(currentPosition)
            case Direction.S: return this.moveSouth(currentPosition)
            case Direction.W: return this.moveWest(currentPosition)
        }
    }
    private moveNorth(currentPosition: Position): Position {
        if(currentPosition.y === LAND_LIMIT) throw new FailedPreconditionError('Invalid moviment')
        return {
            ...currentPosition,
            y: currentPosition.y + 1
        }
    }
    private moveSouth(currentPosition: Position): Position{
        if(currentPosition.y === 0) throw new FailedPreconditionError('Invalid moviment')
            return {
                ...currentPosition,
                y: currentPosition.y - 1
            }
    }
    private moveEast(currentPosition: Position): Position {
        if(currentPosition.x === LAND_LIMIT) throw new FailedPreconditionError('Invalid moviment')
            return {
                ...currentPosition,
                x: currentPosition.x + 1
            }
    }
    private moveWest(currentPosition: Position): Position{
        if(currentPosition.x === 0) throw new FailedPreconditionError('Invalid moviment')
            return {
                ...currentPosition,
                x: currentPosition.x - 1
            }
    }
    private async runBulkInstructions(currentPosition: Position, instructions: Instruction[]): Promise<Position> {
        if(instructions.length === 0) return currentPosition;
        const instruction = instructions[0];
        const nextPos = this.runInstruction(currentPosition, instruction);
        await MovimentModel.create({...nextPos, roverId: 1});
        return this.runBulkInstructions(nextPos, instructions.slice(1, instructions.length));
    }

    async calculateFinalPosition(initialPosition: Position, instructions: string): Promise<Position> {
        this.validateInstructions(instructions);
        const finalPosition = await this.runBulkInstructions(initialPosition, instructions.split('') as Instruction[]);
        return finalPosition;
    }
} 





export const instructionsService = new InstructionsService();
