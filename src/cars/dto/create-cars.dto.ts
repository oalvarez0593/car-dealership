/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';
export class CreateCarDTO {
  @IsString()
  brand: string;
  @IsString()
  model: string;
}
