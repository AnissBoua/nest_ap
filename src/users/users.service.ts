import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity/user.entity';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {
    constructor (@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) {}

    async getUsers(): Promise<UserEntity[]> {
        return await this.userRepository.find({relations: {type: true}});
    }

    async getUser(id: number): Promise<UserEntity> {
        return await this.userRepository.findOne({where: [{id: id}], relations: {type: true}});
    }

    async getUserByEmail(email: string): Promise<UserEntity> {
        return await this.userRepository.findOne({where: [{email: email}], relations: {type: true}});
    }

    async saveOrUpdateRefreshToken(id: number, refreshToken: string, refreshTokenExpires: Date): Promise<UserEntity> {
        await this.userRepository.update(id, {refreshTokens: refreshToken, refreshTokenExpires: refreshTokenExpires});
        return await this.userRepository.findOne({where: [{id: id}], relations: {type: true}})
    }

    async createUser(user: UserEntity): Promise<UserEntity> {
        if (user.password) {
            user.password = await bcrypt.hash(user.password, 10);
        }
        return await this.userRepository.save(user);
    }

    async updateUser(id: number, user: UserEntity): Promise<UserEntity> {
        if (user.password) {
            user.password = await bcrypt.hash(user.password, 10);
        }
        await this.userRepository.update(id, user);
        return await this.userRepository.findOne({where: [{id: id}], relations: {type: true}})
    }

    async deleteUser(id: number): Promise<any> {
        return await this.userRepository.delete(id);
    }

}
