import { Body, Controller, HttpCode, HttpStatus, Post, Req } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { instructionsService } from '../../../services/instructions/instructions.service';
import { ErrorResponseDto } from './common/error-response.dto';
import { InstructionRequestDto } from './dto/instruction-request.dto';
import { PositionDto } from './dto/position.dto';

@Controller('instructions')
@ApiTags('instructions')
export class InstructionsController {
  @Post('/')
  @HttpCode(HttpStatus.OK)
  @HttpCode(HttpStatus.PRECONDITION_FAILED)
  @ApiOperation({
    description: 'Retrieve the APR rate.',
  })
  @ApiOkResponse({
    description: 'Returns an object containing the APR rate.',
    type: PositionDto,
  })
  @ApiOkResponse({
    description: 'Returns an object containing the error message',
    type: ErrorResponseDto,
  })
  async calculateAPR(
    @Req() req: Request,
    @Body() body: InstructionRequestDto,
  ): Promise<PositionDto> {
    console.log('here', body);
    const result = await instructionsService.calculateFinalPosition(body.initialPosition, body.instructions);
    // console.log('result', result);
    return result;
  }
}
 