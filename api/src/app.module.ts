import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MulterModule } from "@nestjs/platform-express";
import { AttributeModule } from "./modules/attribute/attribute.module";
import { PropertyTypeModule } from "./modules/property_type/property_type.module";
import { RoleModule } from "./modules/role/role.module";
import { UserModule } from "./modules/user/user.module";
import { PropertyModule } from "./modules/property/property.module";
import { PropertyAttributeModule } from "./modules/property_attribute/property_attribute.module";
import { ImageModule } from "./modules/image/image.module";
import { typeOrmConfig } from "./config/typeorm.config";

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    MulterModule.register({
      dest: "./upload",
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
