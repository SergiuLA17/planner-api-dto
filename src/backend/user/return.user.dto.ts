import { Expose } from 'class-transformer';

export  class ReturnUserDto {
  @Expose()
  id: number;
  @Expose() 
  email: string;
  @Expose()
  roleId: number;
}
