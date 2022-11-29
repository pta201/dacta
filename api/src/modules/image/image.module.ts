import { Module } from "@nestjs/common";
import { ImageService } from "./image.service";
import { ImageController } from "./image.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Image } from "./entities/image.entity";
import { PropertyModule } from "../property/property.module";

@Module({
  imports: [TypeOrmModule.forFeature([Image]), PropertyModule],
  controllers: [ImageController],
  providers: [ImageService],
  exports: [ImageService],
})
export class ImageModule {}
