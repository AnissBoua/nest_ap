import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { CategoryEntity } from '../../categories/category.entity/category.entity';

@Entity('product')
export class ProductEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ length: 250})
    name: string;
    
    @Column('longtext')
    description: string;

    @Column('longtext')
    image: string;
    
    @Column('decimal', { precision: 6, scale: 2 })
    price: number;

    @Column()
    isactive: boolean;


    @ManyToOne(type => CategoryEntity, category => category.id)
    @JoinColumn({name: 'category'})
    category: CategoryEntity;

}
