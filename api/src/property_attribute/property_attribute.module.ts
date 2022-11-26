import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PropertyAttributeService } from './property_attribute.service';
import { PropertyAttributeController } from './property_attribute.controller';
import { PropertyAttribute } from './entities/property_attribute.entity';
import { PropertyModule } from 'src/property/property.module';
import { AttributeModule } from 'src/attribute/attribute.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([PropertyAttribute]),
    AttributeModule,
    PropertyModule,
  ],
  controllers: [PropertyAttributeController],
  providers: [PropertyAttributeService],
})
export class PropertyAttributeModule {}
