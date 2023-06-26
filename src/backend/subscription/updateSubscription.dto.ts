import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export declare class UpdateSubscriptionDto {
    @ApiProperty({
        type: String,
        description: 'Subscription name',
    })
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        type: Number,
        description: 'Subscription items',
    })
    @IsNumber()
    @IsOptional()
    @IsNotEmpty()
    items: number;

    @ApiProperty({
        type: Number,
        description: 'Cost of the subscription',
    })
    @IsNumber()
    @IsOptional()
    @IsNotEmpty()
    cost: number;

    @ApiProperty({
        type: Number,
        description: 'Currency of the subscription',
    })
    @IsNumber()
    @IsOptional()
    @IsNotEmpty()
    currencyId: number;

    @ApiProperty({
        type: String,
        description: 'Details of the subscription',
    })
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    details: string;
}