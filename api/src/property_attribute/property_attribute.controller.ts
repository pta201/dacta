import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PropertyAttributeService } from './property_attribute.service';
import { CreatePropertyAttributeDto } from './dto/create-property_attribute.dto';
import { UpdatePropertyAttributeDto } from './dto/update-property_attribute.dto';

@Controller('property-attribute')
export class PropertyAttributeController {
  constructor(
    private readonly propertyAttributeService: PropertyAttributeService,
  ) {}

  @Post()
  create(@Body() createPropertyAttributeDto: CreatePropertyAttributeDto) {
    return this.propertyAttributeService.create(createPropertyAttributeDto);
  }

  @Get()
  findAll() {
    return this.propertyAttributeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propertyAttributeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePropertyAttributeDto: UpdatePropertyAttributeDto,
  ) {
    return this.propertyAttributeService.update(
      +id,
      updatePropertyAttributeDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.propertyAttributeService.remove(+id);
  }
}
