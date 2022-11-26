import { Attribute } from 'src/attribute/entities/attribute.entity';
import { Property } from 'src/property/entities/property.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PropertyAttribute {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: string;

  @ManyToOne(() => Property, (property) => property.property_attributes)
  property: Property;

  @ManyToOne(() => Attribute, (attribute) => attribute.property_attributes)
  attribute: Attribute;
}
