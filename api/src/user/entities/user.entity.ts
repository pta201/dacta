import { Property } from 'src/property/entities/property.entity';
import { Role } from 'src/role/entities/role.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @OneToOne(() => Role)
  @JoinColumn()
  role: Role;

  @OneToMany(() => Property, (property) => property.user)
  properties: Property[];
}
