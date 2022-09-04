import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { throws } from 'assert';
import { CreateTaskDTO } from './dto/create-task.dto';
import { TaskStatus } from './task.enum';
import { Task } from './task.entity';
import { TasksRepository } from './tasks.repository';
import { GetTasksDTO } from './dto/get-tasks.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksRepository)
    private taskRepository: TasksRepository,
  ) {}

  async getAllTasks(getTasksDTO: GetTasksDTO): Promise<Task[]> {
    return await this.taskRepository.getTasks(getTasksDTO);
  }

  async getTaskById(id: string): Promise<Task> {
    const found = await this.taskRepository.findOne({ id });
    if (!found) {
      throw new NotFoundException();
    }
    return found;
  }

  createTask(createTaskDTO: CreateTaskDTO): Promise<Task> {
    return this.taskRepository.createTask(createTaskDTO);
  }

  async deleteTask(id: string): Promise<void> {
    const task = await this.getTaskById(id);
    await this.taskRepository.delete({ id: task.id });
  }

  async updateTaskStatus(id: string, status: TaskStatus): Promise<Task> {
    const task = await this.getTaskById(id);
    task.status = status;
    await this.taskRepository.save(task);
    return task;
  }
}
