import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsString } from "class-validator";

export declare class CreateUserDto {
    @ApiProperty({
            type: String,
            description: 'Email of the user',
          })
    @IsEmail()
    email: string;

    @ApiProperty({
            type: String,
            description: 'Password of the user',
          })
    @IsString()
    password: string;
}