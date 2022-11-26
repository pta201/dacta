import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttributeModule } from './attribute/attribute.module';
import { PropertyTypeModule } from './property_type/property_type.module';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';
import { PropertyModule } from './property/property.module';
import { PropertyAttributeModule } from './property_attribute/property_attribute.module';
import { ImageModule } from './image/image.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'dacta',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AttributeModule,
    PropertyTypeModule,
    RoleModule,
    UserModule,
    PropertyModule,
    PropertyAttributeModule,
    ImageModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
