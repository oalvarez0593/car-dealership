/* eslint-disable prettier/prettier */
import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Hilux',
  },
  {
    id: uuid(),
    brand: 'Ford',
    model: 'Everest',
  },
  {
    id: uuid(),
    brand: 'Nissan',
    model: 'NP300',
  },
  {
    id: uuid(),
    brand: 'Ford',
    model: 'Wildtrak',
  },
  {
    id: uuid(),
    brand: 'Volvo',
    model: 'CX40'
  },
  {
    id: uuid(),
    brand: 'Jeep',
    model: 'Wrangler'
  }
];
