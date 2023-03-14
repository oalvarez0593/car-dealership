import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDTO } from './dto/create-cars.dto';
import { UpdateCarDTO } from './dto/update-cars.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) {
      throw new NotFoundException(`Car with id ${id} not found`);
    }
    return car;
  }

  createCar(createCarDTO: CreateCarDTO) {
    const newCar: Car = {
      id: uuid(),
      brand: createCarDTO.brand,
      model: createCarDTO.model,
    };

    this.cars.push(newCar);

    return newCar;
  }

  updateCar(id: string, carDTO: UpdateCarDTO) {
    let carSelected: Car = this.findOneById(id);

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carSelected = { ...carSelected, ...carDTO, id };
        return carSelected;
      }

      return car;
    });

    return carSelected;
  }

  deleteCar(id: string) {
    const borrarCarro: Car = this.findOneById(id);

    this.cars = this.cars.filter((borrado) => borrado.id !== borrarCarro.id);
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
