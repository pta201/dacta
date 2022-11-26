import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreatePropertyAttributeDto {
  @ApiProperty()
  @IsNumber()
  property_id: number;

  @ApiProperty()
  @IsNumber()
  attribute_id: number;

  @ApiProperty()
  @IsString()
  value: string;
}
