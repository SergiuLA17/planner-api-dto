import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export declare class UpdateClientDto {
  @ApiProperty({
        type: String,
        description: 'client name',
      })
  @IsString()
  @IsNotEmpty()
  name: string;
}
