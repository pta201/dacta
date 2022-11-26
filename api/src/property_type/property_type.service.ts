import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePropertyTypeDto } from './dto/create-property_type.dto';
import { UpdatePropertyTypeDto } from './dto/update-property_type.dto';
import { PropertyType } from './entities/property_type.entity';

@Injectable()
export class PropertyTypeService {
  constructor(
    @InjectRepository(PropertyType)
    private readonly property_typeRepository: Repository<PropertyType>,
  ) {}
  async create(createPropertyTypeDto: CreatePropertyTypeDto) {
    const property_type = this.property_typeRepository.create(
      createPropertyTypeDto,
    );
    return this.property_typeRepository.save(property_type);
  }

  async findAll() {
    return await this.property_typeRepository.find();
  }

  async findOne(id: number) {
    const property_type = await this.property_typeRepository.findOne({
      where: { id },
    });
    if (property_type) return property_type;
    throw new NotFoundException();
  }
  async findByName(name: string) {
    return await this.property_typeRepository.findOne({ where: { name } });
  }
  async update(id: number, updatePropertyTypeDto: UpdatePropertyTypeDto) {
    const property_type = await this.property_typeRepository.preload({
      id,
      ...updatePropertyTypeDto,
    });
    if (!property_type) throw new NotFoundException();
    return await this.property_typeRepository.save(property_type);
  }

  async remove(id: number) {
    const property_type = await this.findOne(id);
    return await this.property_typeRepository.remove(property_type);
  }
}
