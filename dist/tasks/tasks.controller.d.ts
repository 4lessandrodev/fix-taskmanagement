import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { Task } from "./task.entity";
import { TaskStatus } from "./task-status.enum";
import { User } from "../auth/user.entity";
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getTasks(user: User): Promise<Task[]>;
    getTaskById(id: number, user: User): Promise<Task>;
    createTasks(createTaskDto: CreateTaskDto, user: User): Promise<Task>;
    updateTaskStatus(id: number, status: TaskStatus, user: User): Promise<Task>;
    deleteTask(id: number, user: User): Promise<void>;
}
