import { PropertyAttribute } from 'src/modules/property_attribute/entities/property_attribute.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  OneToMany,
} from 'typeorm';

@Entity()
export class Attribute {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(
    () => PropertyAttribute,
    (property_attribute) => property_attribute.attribute,
  )
  property_attributes: PropertyAttribute[];
}
