import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { TypeusersService } from './typeusers.service';
import { TypeuserEntity } from './typeuser.entity/typeuser.entity';

@Controller('typeusers')
export class TypeusersController {

    constructor (private service: TypeusersService) {}

    @Get()
    async getTypeUsers() {
        return await this.service.getTypeUsers();
    }

    @Get(':id')
    async getTypeUser(@Param('id') id: number) {
        return await this.service.getTypeUser(id);
    }

    @Post()
    async createTypeUser(@Body() typeUser: TypeuserEntity) {
        return await this.service.createTypeUser(typeUser);
    }

    @Put(':id')
    async updateTypeUser(@Param('id') id: number, @Body() typeUser: TypeuserEntity) {
        return await this.service.updateTypeUser(id, typeUser);
    }

    @Delete(':id')
    async deleteTypeUser(@Param('id') id: number) {
        return await this.service.deleteTypeUser(id);
    }

}
