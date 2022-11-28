import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PropertyTypeService } from "src/modules/property_type/property_type.service";
import { Repository } from "typeorm";
import { PropertyType } from "../property_type/entities/property_type.entity";
import { CreatePropertyDto } from "./dto/create-property.dto";
import { UpdatePropertyDto } from "./dto/update-property.dto";
import { Property } from "./entities/property.entity";

@Injectable()
export class PropertyService {
  constructor(
    @InjectRepository(Property)
    private readonly propertyRepo: Repository<Property>
  ) {}
  async create(
    createPropertyDto: CreatePropertyDto,
    property_type?: PropertyType
  ) {
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
      relations: ["property_attributes", "property_type"],
      where: { id },
    });
  }

  async update(id: number, updatePropertyDto: UpdatePropertyDto) {
    const { property_type_id } = updatePropertyDto;
  }

  async remove(id: number) {
    const property = await this.findOne(id);
    return await this.propertyRepo.remove(property);
  }
}
