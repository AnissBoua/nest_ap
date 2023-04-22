import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('category')
export class CategoryEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 250})
    name: string;

    @Column({ length: 250})
    description: string;
}
