import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('typeuser')
export class TypeuserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 250})
    name: string;
}
