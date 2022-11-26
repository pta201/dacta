import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PropertyTypeService } from './property_type.service';
import { CreatePropertyTypeDto } from './dto/create-property_type.dto';
import { UpdatePropertyTypeDto } from './dto/update-property_type.dto';

@Controller('property-type')
export class PropertyTypeController {
  constructor(private readonly propertyTypeService: PropertyTypeService) {}

  @Post()
  create(@Body() createPropertyTypeDto: CreatePropertyTypeDto) {
    return this.propertyTypeService.create(createPropertyTypeDto);
  }

  @Get()
  findAll() {
    return this.propertyTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propertyTypeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePropertyTypeDto: UpdatePropertyTypeDto,
  ) {
    return this.propertyTypeService.update(+id, updatePropertyTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.propertyTypeService.remove(+id);
  }
}
