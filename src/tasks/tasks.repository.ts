import { EntityRepository, Repository } from 'typeorm';
import { CreateTaskDTO } from './dto/create-task.dto';
import { Order, TaskStatus } from './task.enum';
import { Task } from './task.entity';
import { GetTasksDTO } from './dto/get-tasks.dto';

@EntityRepository(Task)
export class TasksRepository extends Repository<Task> {
  async getTasks(getTasksDTO: GetTasksDTO): Promise<Task[]> {
    const {
      page = 0,
      pageSize = 10,
      order = Order.DESC,
      sortField = 'id',
      status,
      search,
    } = getTasksDTO;
    const query = this.createQueryBuilder('task');

    if (status) {
      query.andWhere('task.status = :status', { status });
    }
    if (search) {
      query.andWhere(`UPPER(task.title) LIKE :search`, {
        search: `%${search}%`,
      });
    }

    const tasks = await query
      .orderBy(sortField, order)
      .take(page)
      .limit(pageSize)
      .getMany();
    return tasks;
  }

  async createTask(createTaskDTO: CreateTaskDTO): Promise<Task> {
    const task = this.create({
      ...createTaskDTO,
      status: TaskStatus.OPEN,
    });
    await this.save(task);
    return task;
  }
}
