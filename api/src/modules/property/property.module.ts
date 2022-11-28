import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PropertyService } from './property.service';
import { PropertyController } from './property.controller';
import { Property } from './entities/property.entity';
import { PropertyTypeModule } from 'src/modules/property_type/property_type.module';

@Module({
  imports: [TypeOrmModule.forFeature([Property]), PropertyTypeModule],
  controllers: [PropertyController],
  providers: [PropertyService],
  exports: [PropertyService],
})
export class PropertyModule {}
