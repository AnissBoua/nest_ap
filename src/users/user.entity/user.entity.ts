import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { TypeuserEntity } from '../../typeusers/typeuser.entity/typeuser.entity';

@Entity('user')
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 250})
    firstname: string;

    @Column({ length: 250})
    lastname: string;

    @Column({ length: 250})
    email: string;

    @Column('text')
    password: string;

    @Column({ length: 45})
    phone: string;

    @ManyToOne(type => TypeuserEntity, role => role.id)
    @JoinColumn({name: 'type'})
    type: TypeuserEntity;

    @Column({nullable: true})
    refreshTokens: string;

    @Column({nullable: true})
    refreshTokenExpires: Date;
}
