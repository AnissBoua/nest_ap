import { Controller, Post, Body, Get, Put, Delete, Param, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductEntity } from './product.entity/product.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('products')
export class ProductsController {

    constructor(private service: ProductsService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async getProducts() {
        return await this.service.getProducts();
    }

    @Get('category/:id')
    async getProductsByCategory(@Param('id') id: number) {
        return await this.service.getProductsByCategory(id);
    }

    @Get(':id')
    async getProduct(@Param('id') id: number) {
        return await this.service.getProduct(id);
    }

    @Post()
    async createProduct(@Body() product: ProductEntity) {
        return await this.service.createProduct(product);
    }

    @Put(':id')
    async updateProduct(@Param('id') id: number, @Body() product: ProductEntity) {
        return await this.service.updateProduct(id, product);
    }

    @Delete(':id')
    async deleteProduct(@Param('id') id: number) {
        return await this.service.deleteProduct(id);
    }

}
