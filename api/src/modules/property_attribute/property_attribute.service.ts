import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AttributeService } from "src/modules/attribute/attribute.service";
import { Attribute } from "src/modules/attribute/entities/attribute.entity";
import { Property } from "src/modules/property/entities/property.entity";
import { PropertyService } from "src/modules/property/property.service";
import { Repository } from "typeorm";
import { CreatePropertyAttributeDto } from "./dto/create-property_attribute.dto";
import { UpdatePropertyAttributeDto } from "./dto/update-property_attribute.dto";
import { PropertyAttribute } from "./entities/property_attribute.entity";

@Injectable()
export class PropertyAttributeService {
  constructor(
    @InjectRepository(PropertyAttribute)
    private readonly property_attributeRepo: Repository<PropertyAttribute>
  ) {}
  async create(property: Property, attribute: Attribute, value: string) {
    const property_attribute = await this.property_attributeRepo.create({
      property,
      attribute,
      value,
    });
    return this.property_attributeRepo.save(property_attribute);
  }

  findAll() {
    return this.property_attributeRepo.find({
      relations: ["property", "attribute"],
    });
  }

  findOne(id: number) {
    return this.property_attributeRepo.findOne({
      where: { id },
      relations: ["property", "attribute"],
    });
  }

  update(id: number, updatePropertyAttributeDto: UpdatePropertyAttributeDto) {
    return `This action updates a #${id} propertyAttribute`;
  }

  async remove(id: number) {
    const attribute = await this.findOne(id);
    return this.property_attributeRepo.remove(attribute);
  }
}
