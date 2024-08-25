import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export enum Direction {
  N = 'N',
  E = 'E',
  S = 'S',
  W = 'W',
}

export class PositionDto {
  @ApiProperty({ example: 0 })
  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => {
    return Number(value);
  })
  x!: number;

  @ApiProperty({ example: 0 })
  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => {
    return Number(value);
  })
  y!: number;

  @ApiProperty({ example: 'N' })
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => {
    return value.toUpperCase();
  })
  @IsEnum(Direction)
  direction!: Direction;
}
