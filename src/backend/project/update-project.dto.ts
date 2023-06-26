import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export declare class UpdateProjectDto {
  @ApiProperty({
        type: String,
        description: 'Project name',
      })
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  name: string;
  @ApiProperty({
        type: Number,
        description: 'Client id of the project',
      })
  @IsNumber()
  @IsOptional()
  @IsNotEmpty()
  clientId: number;

}