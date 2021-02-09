import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
  UseGuards,
  Query,
} from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";
// import { pipe } from 'rxjs';
import { Task } from "./task.entity";
import { TaskStatus } from "./task-status.enum";
import { AuthGuard } from "@nestjs/passport";
import { GetUser } from "../auth/get-user.decorator";
import { User } from "../auth/user.entity";

@Controller("tasks")
@UseGuards(AuthGuard())
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(user: User): Promise<Task[]> {
    console.log(user);
    return this.tasksService.getTasks(user);
  }

  @Get("/:id")
  getTaskById(
    @Param("id", ParseIntPipe) id: number,
    @GetUser() user: User
  ): Promise<Task> {
    return this.tasksService.getTaskById(id, user);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createTasks(
    @Body() createTaskDto: CreateTaskDto,
    @GetUser() user: User
  ): Promise<Task> {
    console.log(User); // undefined
    return this.tasksService.createTask(createTaskDto, user);
  }

  @Patch("/:id/status")
  updateTaskStatus(
    @Param("id", ParseIntPipe) id: number,
    @Body("status") status: TaskStatus,
    @GetUser() user: User
  ): Promise<Task> {
    return this.tasksService.updateTaskStatus(id, status, user);
  }

  @Delete('/:id')
  deleteTask(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User,
  ): Promise<void> {
    return this.tasksService.deleteTask(id, user);
  }
}
