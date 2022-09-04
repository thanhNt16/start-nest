import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { TaskStatus } from '../task.enum';

export class UpdateTaskDTO {
  @IsString()
  @IsEnum(TaskStatus)
  @ApiProperty()
  status: TaskStatus;
}
