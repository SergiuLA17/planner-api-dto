import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"


export declare class UpdateExpensesDto{
    @ApiProperty({
            type: String,
            description: 'Name of the expense',
          })
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    name:string

    @ApiProperty({
            type: Number,
            description: 'Number of the expense',
          })
    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    amount:number

    @ApiProperty({
            type: Number,
            description: 'Currency of the expense',
          })
    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    currencyId:number

    @ApiProperty({
            type: Number,
            description: 'Period of the expense',
          })
    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    periodId:number
}