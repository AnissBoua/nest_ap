import { Controller, Post, Get, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoryEntity } from './category.entity/category.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('categories')
export class CategoriesController {

    constructor (private service: CategoriesService) {}

    @Get()
    async getCategories() {
        return await this.service.getCategories();
    }

    @Get(':id')
    async getCategory(@Param('id') id: number) {
        return await this.service.getCategory(id);
    }

    @UseGuards(AuthGuard('jwt-admin'))
    @Post()
    async createCategory(@Body() category: CategoryEntity) {
        return await this.service.createCategory(category);
    }

    @UseGuards(AuthGuard('jwt-admin'))
    @Put(':id')
    async updateCategory(@Param('id') id: number, @Body() category: CategoryEntity) {
        return await this.service.updateCategory(id, category);
    }

    @UseGuards(AuthGuard('jwt-admin'))
    @Delete(':id')
    async deleteCategory(@Param('id') id: number) {
        return await this.service.deleteCategory(id);
    }

}
