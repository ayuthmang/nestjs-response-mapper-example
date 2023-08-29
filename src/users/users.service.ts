import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

const users: User[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    password: '123456789',
  },
];

@Injectable()
export class UsersService {
  async getUsers() {
    return users;
  }
}
