/* eslint-disable prettier/prettier */
import { IsOptional, IsString, IsUUID } from 'class-validator';
export class UpdateCarDTO {
  @IsString()
  @IsUUID()
  @IsOptional()
  id?: string;

  @IsString()
  @IsOptional()
  brand?: string;

  @IsString()
  @IsOptional()
  model?: string;
}
