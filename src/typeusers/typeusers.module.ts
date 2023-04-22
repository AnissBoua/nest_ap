import { Module } from '@nestjs/common';
import { TypeusersService } from './typeusers.service';
import { TypeusersController } from './typeusers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeuserEntity } from './typeuser.entity/typeuser.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TypeuserEntity])],
  providers: [TypeusersService],
  controllers: [TypeusersController]
})
export class TypeusersModule {}
