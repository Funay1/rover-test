import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ErrorResponseDto {
  @ApiProperty({ example: 'loanTerm should be greater than 35 months' })
  @IsNotEmpty()
  message!: string;
}
