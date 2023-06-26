import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export declare class UpdateProjectProviderDto {
  @ApiProperty({
        type: Number,
        description: 'Id of the project',
      })
  @IsNumber()
  @IsOptional()
  @IsNotEmpty()
  projectId: number;

  @ApiProperty({
        type: Number,
        description: 'Id of the provider',
      })
    @IsNumber()
    @IsOptional()
    @IsNotEmpty()
  providerId: number;
}