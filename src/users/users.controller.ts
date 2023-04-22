import { Controller, Param, Post, Get, Put, Delete, Body, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserEntity } from './user.entity/user.entity';
import { AuthGuard } from '@nestjs/passport';


@Controller('users')
export class UsersController {
    constructor(private service: UsersService) {}

    @Get()
    async getUsers() {
        return await this.service.getUsers();
    }

    @Get(':id')
    async getUser(@Param('id') id: number) {
        return await this.service.getUser(id);
    }

    @Post()
    async createUser(@Body() user: UserEntity) {
        return await this.service.createUser(user);
    }

    @Put(':id')
    async updateUser(@Param('id') id: number, @Body() user: UserEntity) {
        return await this.service.updateUser(id, user);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    async deleteUser(@Param('id') id: number) {
        return await this.service.deleteUser(id);
    }

}
