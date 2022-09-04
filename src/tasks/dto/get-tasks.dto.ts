import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, IsNumber, IsEnum, IsOptional } from 'class-validator';
import { Order, TaskStatus } from '../task.enum';

export class GetTasksDTO {
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
  @Type(() => Number)
  page: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
  @Type(() => Number)
  pageSize: number;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  sortField: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  order: Order;

  @IsEnum(TaskStatus)
  @IsOptional()
  @ApiPropertyOptional()
  status: TaskStatus;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  search: string;
}
