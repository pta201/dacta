import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { PropertyAttributeService } from "./property_attribute.service";
import { CreatePropertyAttributeDto } from "./dto/create-property_attribute.dto";
import { UpdatePropertyAttributeDto } from "./dto/update-property_attribute.dto";
import { PropertyService } from "../property/property.service";
import { AttributeService } from "../attribute/attribute.service";
import { CreatePropertyDto } from "../property/dto/create-property.dto";

@Controller("property-attribute")
export class PropertyAttributeController {
  constructor(
    private readonly propertyAttributeService: PropertyAttributeService,
    private readonly propertyService: PropertyService,
    private readonly attributeService: AttributeService
  ) {}

  @Post()
  async create(@Body() createPropertyAttributeDto: CreatePropertyAttributeDto) {
    const { property_id, attribute_id, value } = createPropertyAttributeDto;
    const property = await this.propertyService.findOne(property_id);
    const attribute = await this.attributeService.findOne(attribute_id);
    return await this.propertyAttributeService.create(
      property,
      attribute,
      value
    );
  }

  @Get()
  findAll() {
    return this.propertyAttributeService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.propertyAttributeService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updatePropertyAttributeDto: UpdatePropertyAttributeDto
  ) {
    return this.propertyAttributeService.update(
      +id,
      updatePropertyAttributeDto
    );
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.propertyAttributeService.remove(+id);
  }
}
