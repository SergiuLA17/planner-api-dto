import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export declare class CreateProjectProviderDto {
  @ApiProperty({
        type: Number,
        description: 'Id of the project',
      })
  @IsNumber()
  @IsNotEmpty()
  projectId: number;

  @ApiProperty({
        type: Number,
        description: 'Id of the provider',
      })
  @IsNumber()
  @IsNotEmpty()
  providerId: number;
}