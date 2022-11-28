import { User } from 'src/modules/user/entities/user.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
enum ROLE {
  ADMIN = 'Admin',
  SUPER_ADMIN = 'Super Admin',
  SELLER = 'Seller',
  BUYER = 'Buyer',
  GUEST = 'Guest',
}
