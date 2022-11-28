import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";
import { CreateAttributeDto } from "src/modules/attribute/dto/create-attribute.dto";
import { CreatePropertyDto } from "src/modules/property/dto/create-property.dto";

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
