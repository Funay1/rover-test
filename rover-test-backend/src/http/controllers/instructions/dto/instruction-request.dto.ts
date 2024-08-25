import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { PositionDto } from './position.dto';
import { Transform, Type } from 'class-transformer';

export class InstructionRequestDto {
  @ApiProperty({ example: {x: 1, y: 2, direction: 'N'} })
  @IsNotEmpty()
  @Type(() => PositionDto)
  initialPosition!: PositionDto;

  @ApiProperty({ example: 'LMLMLMLMM' })
  @IsString()
  @Transform(({ value }) => {
    return value.toUpperCase();
  })
  @IsNotEmpty()
  instructions!: string;
}
