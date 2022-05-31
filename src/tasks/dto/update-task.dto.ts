import { PartialType } from '@nestjs/swagger';
import { TaskStatus } from '../task.status.enum';
import { CreateTaskDto } from './create-task.dto';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  status: TaskStatus;
}
