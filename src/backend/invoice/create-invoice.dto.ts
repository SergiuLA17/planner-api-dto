import { IsNumber, IsArray, ValidateNested, IsString, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export declare class ProviderDto {
  @ApiProperty({
        type: Number,
        description: 'Id of the provider',
      })
  @IsNumber()
  providerId: number;


  @ApiProperty({
        type: Number,
        description: 'Hours of the provider',
      })
  @IsNumber()
  hours: number;

  @ApiProperty({
        type: Number,
        description: 'Staff ID of the provider',
      })
  @IsNumber()
  @IsOptional()
  staffID?: number;

  @ApiProperty({
        type: String,
        description: 'Staff name of the provider',
      })
  @IsString()
  @IsOptional()
  @IsOptional()
  staffName?: string;

  @ApiProperty({
        type: Number,
        description: 'Amount of the provider',
      })
  @IsNumber()
  @IsOptional()
  @IsOptional()
  amount?: number;

  @ApiProperty({
        type: Number,
        description: 'Currency ID of the provider: US Dollar = 1 or Euro = 2',
      })
  @IsNumber()
  @IsOptional()
  currencyId?: number;

  @ApiProperty({
        type: Number,
        description: 'Hourly rate of the provider',
      })
  @IsNumber()
  @IsOptional()
  hourlyRate?: number;
}

export declare class CreateInvoiceDto {
  @ApiProperty({
        type: Number,
        description: 'Period id of the invoice',
      })
  @IsNumber()
  periodId: number;

  @ApiProperty({
        type: Number,
        description: 'Client id of the invoice',
      })
  @IsNumber()
  clientId: number;

  @ApiProperty({
        type: Number,
        description: 'Currency ID of the provider: US Dollar = 1 or Euro = 2',
      })
  @IsNumber()
  currencyId: number;

  @ApiProperty({
        type: ProviderDto,
        description: 'List of providers',
      })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProviderDto)
  providers: ProviderDto[];
}
