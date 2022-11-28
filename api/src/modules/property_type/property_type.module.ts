import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PropertyTypeService } from './property_type.service';
import { PropertyTypeController } from './property_type.controller';
import { PropertyType } from './entities/property_type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PropertyType])],
  controllers: [PropertyTypeController],
  providers: [PropertyTypeService],
  exports: [PropertyTypeService],
})
export class PropertyTypeModule {}
