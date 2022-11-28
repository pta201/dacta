import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from "@nestjs/common";
import { PropertyService } from "./property.service";
import { CreatePropertyDto } from "./dto/create-property.dto";
import { UpdatePropertyDto } from "./dto/update-property.dto";
import { PropertyTypeService } from "../property_type/property_type.service";
import { AttributeService } from "../attribute/attribute.service";
import { PropertyAttributeService } from "../property_attribute/property_attribute.service";

@Controller("property")
export class PropertyController {
  constructor(
    private readonly propertyService: PropertyService,
    private readonly propertyTypeService: PropertyTypeService
  ) {}

  @Post()
  async create(@Body() property: CreatePropertyDto) {
    const { name, address, property_type_id } = property;
    const property_type = await this.propertyTypeService.findOne(
      property_type_id
    );
    return this.propertyService.create({ name, address }, property_type);
  }

  @Get()
  findAll() {
    return this.propertyService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.propertyService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updatePropertyDto: UpdatePropertyDto
  ) {
    return this.propertyService.update(+id, updatePropertyDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.propertyService.remove(+id);
  }
}
