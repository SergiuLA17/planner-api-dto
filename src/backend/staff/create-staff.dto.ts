import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export declare class CreateStaffDto{
  @ApiProperty({
        type: String,
        description: 'Name of the staff member',
      })
  @IsString()
  name: string;

  @ApiProperty({
        type: Number,
        description: 'Salary of the staff member',
      })
  @IsNumber()
  salary: number;
}