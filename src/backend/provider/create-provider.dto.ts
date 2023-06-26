import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional } from "class-validator";

export declare class CreateProviderDto {
  @ApiProperty({
        type: Number,
        description: 'Hourly rate of the provider',
      })
  @IsNumber()
  hourlyRate: number;

  @ApiProperty({
        type: Number,
        description: 'Hours of the provider',
      })
  @IsNumber()
  staffID: number;

  @ApiProperty({
        type: Number,
        description: 'Currency id of the provider: US Dollar = 1 or Euro = 2',
      })
  @IsNumber()
  currencyId: number;
}
