import { IsNumber, IsOptional, IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";


export declare class UpdateInvoiceDto {
  @ApiProperty({
    type: Number,
    description: 'Period id of the invoice',
  })
  @IsNumber()
  @IsOptional()
  @IsNotEmpty()
  periodId: number;

  @ApiProperty({
    type: Number,
    description: 'Client id of the invoice',
  })
  @IsNumber()
  @IsOptional()
  @IsNotEmpty()
  clientId: number;

  @ApiProperty({
    type: Number,
    description: 'Currency ID of the provider: US Dollar = 1 or Euro = 2',
  })
  @IsNumber()
  @IsOptional()
  @IsNotEmpty()
  currencyId: number;

}
