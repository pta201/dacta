import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional()
  @Type(() => Number)
  limit: number;

  @IsOptional()
  @IsPositive()
  offset: number;
}
