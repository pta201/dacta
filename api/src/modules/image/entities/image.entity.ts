import { Property } from "src/modules/property/entities/property.entity";
import { Column, PrimaryGeneratedColumn, ManyToOne, Entity } from "typeorm";

@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    nullable: true,
  })
  number?: number;

  @Column()
  path: string;

  @ManyToOne(() => Property, (property) => property.images)
  property?: Property;
}
