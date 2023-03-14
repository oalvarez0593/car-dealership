/* eslint-disable prettier/prettier */
import { Brand } from 'src/brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';

export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'toyota',
    createAt: new Date().getTime(),
    updateAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'ford',
    createAt: new Date().getTime(),
    updateAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'honda',
    createAt: new Date().getTime(),
    updateAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'nissan',
    createAt: new Date().getTime(),
    updateAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'jeep',
    createAt: new Date().getTime(),
    updateAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'tesla',
    createAt: new Date().getTime(),
    updateAt: new Date().getTime(),
  },
];
