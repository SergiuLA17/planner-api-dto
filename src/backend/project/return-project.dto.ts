import { Expose } from "class-transformer";

export declare class ReturnProjectDto {
  @Expose()
  name: number;
  @Expose()
  clientId: number;
  @Expose()
  id: number;

}