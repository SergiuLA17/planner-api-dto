import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export declare class CreateClientDto {
  @ApiProperty({
        type: String,
        description: 'client name',
      })
  @IsString()
  name: string;
}
