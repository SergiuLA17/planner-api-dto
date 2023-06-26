import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export declare class UpdateStaffDto{
  @ApiProperty({
        type: String,
        description: 'Name of the staff member',
      })
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
        type: Number,
        description: 'Salary of the staff member',
      })
  @IsNumber()
  @IsOptional()
  @IsNotEmpty()
  salary: number;
}