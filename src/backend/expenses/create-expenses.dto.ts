import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsString } from "class-validator"


export declare class CreateExpensesDto{
    @ApiProperty({
            type: String,
            description: 'Name of the expense',
          })
    @IsString()
    @IsNotEmpty()
    name:string

    @ApiProperty({
            type: Number,
            description: 'Number of the expense',
          })
    @IsNumber()
    @IsNotEmpty()
    amount:number

    @ApiProperty({
            type: Number,
            description: 'Currency of the expense',
          })
    @IsNumber()
    @IsNotEmpty()
    @IsNumber()
    @IsNotEmpty()
    currencyId:number

    @ApiProperty({
            type: Number,
            description: 'Period of the expense',
          })
    @IsNumber()
    @IsNotEmpty()
    @IsNumber()
    @IsNotEmpty()
    periodId:number
}