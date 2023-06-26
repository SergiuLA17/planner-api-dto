import { IsNumber, IsOptional, IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";


export declare class UpdateInvoiceProviderDto {
  @ApiProperty({
    type: Number,
    description: 'Id of the provider',
  })
  @IsNumber()
  @IsOptional()
  @IsNotEmpty()
  providerId: number;


  @ApiProperty({
    type: Number,
    description: 'Hours of the provider',
  })
  @IsNumber()
  @IsOptional()
  @IsNotEmpty()
  hours: number;

  @ApiProperty({
    type: Number,
    description: 'Hourly rate of the provider',
  })
  @IsNumber()
  @IsOptional()
  @IsNotEmpty()
  hourlyRate: number;

  @ApiProperty({
    type: Number,
    description: 'Invoice ID of the provider',
  })
  @IsNumber()
  @IsOptional()
  @IsNotEmpty()
  invoideId: number;

  @ApiProperty({
        type: Number,
        description: 'Currency ID of the provider: US Dollar = 1 or Euro = 2',
      })
    @IsNumber()
    @IsOptional()
    @IsNotEmpty()
  currencyId: number;
}
