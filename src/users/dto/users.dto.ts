import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class UsersResponseDto {
  @Expose()
  id: string;

  @Expose()
  firstName: string;

  @Expose()
  lastName: string;
}
