import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { registerGlobals } from 'src/main';
import { User } from './entities';
import { ClassSerializerInterceptor } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import {
  classToPlain,
  instanceToPlain,
  plainToInstance,
} from 'class-transformer';
import { UsersResponseDto } from './dto';

function ensureNoPassword(user: User) {
  expect(user).not.toHaveProperty('password');
}

describe('UsersController', () => {
  let module: TestingModule;
  let usersController: UsersController;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    const app = module.createNestApplication();
    registerGlobals(app);
    await app.init();
    usersController = app.get<UsersController>(UsersController);
  });

  afterEach(async () => {
    await module.close();
  });

  describe('getUsers', () => {
    it('should return users without password', async () => {
      const users = await usersController.getUsers();
      const expected = [{ id: '1', firstName: 'John', lastName: 'Doe' }];

      let user = new User();
      user.id = '1';
      user.firstName = 'John';
      user.lastName = 'Doe';
      user.password = '123456789';
      // @ts-ignore
      user.baby = '12k3j1lk2j3';

      // console.log(
      //   plainToInstance(UsersResponseDto, user, {
      //     // excludeExtraneousValues: true,
      //     strategy: 'excludeAll',
      //   }),
      // );
      // expect(users[0]).toEqual(expected[0]);
    });
  });
});
