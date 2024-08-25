import { Direction, Instruction } from "../types";

export const positionsMapping = {
    [Direction.N]: {
        [Instruction.L]: Direction.W,
        [Instruction.R]: Direction.E,
    },
    [Direction.E]: {
        [Instruction.L]: Direction.N,
        [Instruction.R]: Direction.S,
    },
    [Direction.S]: {
        [Instruction.L]: Direction.E,
        [Instruction.R]: Direction.W,
    },
    [Direction.W]: {
        [Instruction.L]: Direction.S,
        [Instruction.R]: Direction.N,
    },
  } as any;