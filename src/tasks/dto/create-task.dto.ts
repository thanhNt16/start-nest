import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength, MaxLength } from 'class-validator';

export class CreateTaskDTO {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @ApiProperty()
  title: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @ApiProperty()
  description: string;
}
