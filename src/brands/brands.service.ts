import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';
import { NotFoundException } from '@nestjs/common/exceptions';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [];

  create(createBrandDto: CreateBrandDto) {
    const brand: Brand = {
      id: uuid(),
      name: createBrandDto.name.toLowerCase(),
      createAt: new Date().getTime(),
    };

    this.brands.push(brand);

    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((marca) => marca.id === id);

    if (!brand) {
      throw new NotFoundException(
        `No se encontró ninguna marca con el id ${id}`,
      );
    }

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandSelected: Brand = this.findOne(id);

    this.brands = this.brands.map((brand) => {
      if (brand.id === id) {
        brandSelected.updateAt = new Date().getTime();
        brandSelected = { ...brandSelected, ...updateBrandDto };

        return brandSelected;
      }
      return brand;
    });
    return brandSelected;
  }

  remove(id: string) {
    return this.brands.filter((brandDelete) => brandDelete.id !== id);
  }

  fillBrandsWithSeedData(brands: Brand[]) {
    this.brands = brands;
  }
}
