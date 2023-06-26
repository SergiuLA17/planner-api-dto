import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export declare class CreateProjectDto {
  @ApiProperty({
        type: String,
        description: 'Project name',
      })
  @IsString()
  name: string;
  @ApiProperty({
        type: Number,
        description: 'Client id of the project',
      })
  @IsNumber()
  clientId: number;

}