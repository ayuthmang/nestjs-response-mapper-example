import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResponseDto } from './dto/users-response.dto';
import { plainToInstance } from 'class-transformer';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers(): Promise<UsersResponseDto[]> {
    const users = await this.usersService.getUsers();
    return plainToInstance(UsersResponseDto, users);
  }
}
