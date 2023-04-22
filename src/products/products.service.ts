import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from './product.entity/product.entity';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductEntity)
        private productsRepository: Repository<ProductEntity>,
    ) {}
    
    async getProducts(): Promise<ProductEntity[]> {
        return await this.productsRepository.find({where: {isactive: true}});
    }

    async getProductsByCategory(categoryId: number): Promise<ProductEntity[]> {
        return await this.productsRepository.find({where: [{category: {id: categoryId}}]});
    }

    async getProduct(id: number): Promise<ProductEntity> {
        return await this.productsRepository.findOne({where: [{id: id}]});
    }

    async createProduct(product: ProductEntity): Promise<any> {
        return await this.productsRepository.save(product);
    }

    async updateProduct(id: number, product: ProductEntity): Promise<ProductEntity> {
        await this.productsRepository.update(id, product);
        return await this.productsRepository.findOne({where: [{id: id}]})
    }

    async deleteProduct(id: number): Promise<any> {
        return await this.productsRepository.delete(id);
    }
}
