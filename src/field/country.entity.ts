import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(['name'])
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
