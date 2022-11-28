import { Attribute } from './entities/attribute.entity';
import { Injectable } from '@nestjs/common';
import { CreateAttributeDto } from './dto/create-attribute.dto';
import { UpdateAttributeDto } from './dto/update-attribute.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AttributeService {
  constructor(
    @InjectRepository(Attribute)
    private readonly attributeRepo: Repository<Attribute>,
  ) {}
  create(createAttributeDto: CreateAttributeDto) {
    const attribute = this.attributeRepo.create(createAttributeDto);
    return this.attributeRepo.save(attribute);
  }

  async findAll() {
    return await this.attributeRepo.find();
  }

  async findOne(id: number) {
    return await this.attributeRepo.findOne({ where: { id: id } });
  }
  async findByName(name: string) {
    return await this.attributeRepo.findOne({ where: { name } });
  }

  async update(id: number, updateAttributeDto: UpdateAttributeDto) {
    const attribute = await this.attributeRepo.preload({
      id,
      ...updateAttributeDto,
    });
    if (!attribute) throw new Error(`Attribute #${id} can't be found!`);
    return this.attributeRepo.save(attribute);
  }

  async remove(id: number) {
    const attribute = await this.findOne(id);
    return await this.attributeRepo.remove(attribute);
  }
}
