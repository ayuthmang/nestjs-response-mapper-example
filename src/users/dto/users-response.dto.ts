import { Expose } from 'class-transformer';

export class UsersResponseDto {
  @Expose()
  id: string;

  @Expose()
  firstName: string;

  @Expose()
  lastName: string;
}
