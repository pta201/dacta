import { Attribute } from 'src/attribute/entities/attribute.entity';
import { PropertyAttribute } from 'src/property_attribute/entities/property_attribute.entity';
import { PropertyType } from 'src/property_type/entities/property_type.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Property {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @ManyToOne(() => PropertyType, (property_type) => property_type.property)
  property_type: PropertyType;

  @ManyToOne(() => User, (user) => user.properties)
  user: User;

  @OneToMany(
    () => PropertyAttribute,
    (property_attribute) => property_attribute.property,
    {
      cascade: true,
    },
  )
  property_attributes: PropertyAttribute[];
}
