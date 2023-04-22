import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeuserEntity } from './typeuser.entity/typeuser.entity';

@Injectable()
export class TypeusersService {

    constructor (@InjectRepository(TypeuserEntity) private typeUserRepository: Repository<TypeuserEntity>) {}

    async getTypeUsers(): Promise<TypeuserEntity[]> {
        return await this.typeUserRepository.find();
    }

    async getTypeUser(id: number): Promise<TypeuserEntity> {
        return await this.typeUserRepository.findOne({where: [{id: id}]});
    }

    async createTypeUser(typeUser: TypeuserEntity): Promise<TypeuserEntity> {
        return await this.typeUserRepository.save(typeUser);
    }

    async updateTypeUser(id: number, typeUser: TypeuserEntity): Promise<TypeuserEntity> {
        await this.typeUserRepository.update(id, typeUser);
        return await this.typeUserRepository.findOne({where: [{id: id}]})
    }

    async deleteTypeUser(id: number): Promise<any> {
        return await this.typeUserRepository.delete(id);
    }
}
