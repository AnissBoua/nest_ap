import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryEntity } from './category.entity/category.entity';

@Injectable()
export class CategoriesService {
    constructor (@InjectRepository(CategoryEntity) private categoryRepository: Repository<CategoryEntity>) {}

    async getCategories(): Promise<CategoryEntity[]> {
        return await this.categoryRepository.find();
    }

    async getCategory(id: number): Promise<CategoryEntity> {
        return await this.categoryRepository.findOne({where: [{id: id}]});
    }

    async createCategory(category: CategoryEntity): Promise<CategoryEntity> {
        return await this.categoryRepository.save(category);
    }

    async updateCategory(id: number, category: CategoryEntity): Promise<CategoryEntity> {
        await this.categoryRepository.update(id, category);
        return await this.categoryRepository.findOne({where: [{id: id}]})
    }

    async deleteCategory(id: number): Promise<any> {
        return await this.categoryRepository.delete(id);
    }

}
