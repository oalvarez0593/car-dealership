import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ParseIntPipe, ParseUUIDPipe } from '@nestjs/common/pipes';
import { CarsService } from './cars.service';
import { CreateCarDTO } from './dto/create-cars.dto';
import { UpdateCarDTO } from './dto/update-cars.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}
  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    console.log(id);

    return this.carsService.findOneById(id);
  }

  @Post()
  createCar(@Body() carDTO: CreateCarDTO) {
    return this.carsService.createCar(carDTO);
  }

  @Patch(':id')
  updateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() carDTO: UpdateCarDTO,
  ) {
    return this.carsService.updateCar(id, carDTO);
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    this.carsService.deleteCar(id);
  }
}
