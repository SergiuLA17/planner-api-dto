import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, ValidateIf } from "class-validator";

export declare class UpdateProviderDto {
  @ApiProperty({
        type: Number,
        description: 'Hourly rate of the provider',
      })
  @IsNumber()
  @IsOptional()
  hourlyRate: number;

  @ApiProperty({
        type: Number,
        description: 'Hours of the provider',
      })
  @IsNumber()
  @IsOptional()
  staffID: number;

  @ApiProperty({
        type: Number,
        description: 'Currency id of the provider: US Dollar = 1 or Euro = 2',
      })
  @IsNumber()
  @IsOptional()
  currencyId: number;
}
