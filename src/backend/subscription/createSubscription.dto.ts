import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export declare class CreateSubscriptionDto {
    @ApiProperty({
        type: String,
        description: 'Subscription name',
    })
    @IsString()
    name: string;

    @ApiProperty({
        type: Number,
        description: 'Subscription items',
    })
    @IsNumber()
    items: number;

    @ApiProperty({
        type: Number,
        description: 'Cost of the subscription',
    })
    @IsNumber()
    cost: number;

    @ApiProperty({
        type: Number,
        description: 'Currency of the subscription',
    })
    @IsNumber()
    currencyId: number;

    @ApiProperty({
        type: String,
        description: 'Details of the subscription',
    })
    @IsString()
    details: string;
}