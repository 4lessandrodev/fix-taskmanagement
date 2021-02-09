import { IsNotEmpty } from 'class-validator';
import { IsString } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  // @IsString()
  title: string;

  @IsNotEmpty()
  // @IsString()
  description: string;
}
