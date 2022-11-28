import { Image } from 'src/modules/image/entities/image.entity';
import { PropertyAttribute } from 'src/modules/property_attribute/entities/property_attribute.entity';
import { PropertyType } from 'src/modules/property_type/entities/property_type.entity';
import { User } from 'src/modules/user/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
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
  property_type?: PropertyType;

  @ManyToOne(() => User, (user) => user.properties)
  user?: User;

  @OneToMany(
    () => PropertyAttribute,
    (property_attribute) => property_attribute.property,
    {
      cascade: true,
    },
  )
  property_attributes?: PropertyAttribute[];

  @OneToMany(() => Image, (image) => image.property)
  images?: Image[];
}
