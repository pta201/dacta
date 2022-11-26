import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PropertyTypeService } from 'src/property_type/property_type.service';
import { Repository } from 'typeorm';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { Property } from './entities/property.entity';

@Injectable()
export class PropertyService {
  constructor(
    @InjectRepository(Property)
    private readonly propertyRepo: Repository<Property>,
    private readonly property_typeService: PropertyTypeService,
  ) {}
  async create(createPropertyDto: CreatePropertyDto) {
    const { property_type_id } = createPropertyDto;
    const property_type = await this.property_typeService.findOne(
      property_type_id,
    );
    const property = this.propertyRepo.create({
      ...createPropertyDto,
      property_type,
    });
    return this.propertyRepo.save(property);
  }

  async findAll() {
    return await this.propertyRepo.find({
      relations: {
        property_attributes: {
          attribute: true,
        },
        property_type: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.propertyRepo.findOne({
      relations: ['property_attributes', 'property_type'],
      where: { id },
    });
  }

  async update(id: number, updatePropertyDto: UpdatePropertyDto) {
    const { property_type_id } = updatePropertyDto;
    const property_type = await this.property_typeService.findOne(
      property_type_id,
    );
    const property = await this.propertyRepo.preload({
      id,
      ...updatePropertyDto,
      property_type,
    });
    if (!property) throw new NotFoundException();
    return this.propertyRepo.save(property);
  }

  async remove(id: number) {
    const property = await this.findOne(id);
    return await this.propertyRepo.remove(property);
  }

  async preloadPropertyType(name: string) {
    const property_type = this.property_typeService.findByName(name);
    if (property_type) {
      return property_type;
    }
    return this.property_typeService.create({ name });
  }
}
